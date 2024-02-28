const Storage = require('./storage').Storage;

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.InstagramFeed = factory();
  }
}(this, function () {
  var defaults = {
    'host': "https://www.instagram.com/",
    'username': '',
    'tag': '',
    'container': '',
    'display_profile': false,
    'display_biography': false,
    'display_gallery': true,
    'display_igtv': false,
    'callback': null,
    'callbackOnHtml': null,
    'styling': true,
    'items': 8,
    'items_per_row': 4,
    'margin': 0.5,
    'image_size': 640,
    'lazy_load': false,
    'on_error': console.error
  };

  var image_sizes = {
    "150": 0,
    "240": 1,
    "320": 2,
    "480": 3,
    "640": 4
  };

  var escape_map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escape_string(str) {
    return str.replace(/[&<>"'`=\/]/g, function (char) {
      return escape_map[char];
    });
  }

  return function (opts) {
    this.options = Object.assign({}, defaults);
    this.options = Object.assign(this.options, opts);
    this.is_tag = this.options.username === "";
    this.cacheKey = 'ic_' + this.options.username;
    this.valid = true;
    //${process.env.GATSBY_CORE_BASE_URL}

    this.feedApiUrl = `${process.env.GATSBY_CORE_BASE_URL}/api/instagram/${this.options.username}`;
    if (this.options.username === "" && this.options.tag === "") {
      this.options.on_error("InstagramFeed: Error, no username or tag defined.", 1);
      this.valid = false;
    }
    if (typeof this.options.get_data !== "undefined") {
      console.warn("InstagramFeed: options.get_data is deprecated, options.callback is always called if defined");
    }
    if (this.options.callback == null && this.options.callbackOnHtml == null && this.options.container === "") {
      this.options.on_error("InstagramFeed: Error, neither container found nor callback defined.", 2);
      this.valid = false;
    }

    this.get = function (callback) {
      var _this = this;
      var data = Storage.GetLocalStorageValue(this.cacheKey);

      if (data) {
        callback(data, _this);
        return data;
      }
      var xhr = new XMLHttpRequest();


      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            try {
              var response = JSON.parse(xhr.response);//xhr.responseText.split("window._sharedData = ")[1].split("<\/script>")[0];
              data = response.data;
              if (response.error || response.status === 404) {
                _this.options.on_error("Instagram user does not exists", 3);
                return;
              }
              Storage.SetLocalStorageValue(_this.cacheKey, data, 15 * 60 * 1000);//expiry time 15 min
            } catch (error) {
              console.log(error);
              _this.options.on_error("InstagramFeed: It looks like the profile you are trying to fetch is age restricted.", 3);
              return;
            }
            if (!data || typeof data === "undefined") {
              _this.options.on_error("InstagramFeed: It looks like YOUR network has been temporary banned because of too many requests.", 4);
              return;
            }
            callback(data, _this);
          } else {
            _this.options.on_error("InstagramFeed: Unable to fetch the given user/tag. Instagram responded with the status code: " + xhr.statusText, 5);
          }
        }
      };
      xhr.open("GET", _this.feedApiUrl, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('api-key', `${process.env.GATSBY_CORE_API_KEY}`);
      xhr.send();
    };

    this.parse_caption = function (igobj, data) {
      if (
        typeof igobj.node.edge_media_to_caption.edges[0] !== "undefined" &&
        typeof igobj.node.edge_media_to_caption.edges[0].node !== "undefined" &&
        typeof igobj.node.edge_media_to_caption.edges[0].node.text !== "undefined" &&
        igobj.node.edge_media_to_caption.edges[0].node.text !== null
      ) {
        return igobj.node.edge_media_to_caption.edges[0].node.text;
      }

      if (
        typeof igobj.node.title !== "undefined" &&
        igobj.node.title !== null &&
        igobj.node.title.length !== 0
      ) {
        return igobj.node.title;
      }

      if (
        typeof igobj.node.accessibility_caption !== "undefined" &&
        igobj.node.accessibility_caption !== null &&
        igobj.node.accessibility_caption.length !== 0
      ) {
        return igobj.node.accessibility_caption;
      }
      return (this.is_tag ? data.name : data.username) + " image ";
    }

    this.display = function (data) {
      // Styling
      const width = this.options.styling ? (100 - this.options.margin * 2 * this.options.items_per_row) / this.options.items_per_row : null;
      const styles = {
        'profile_container': this.options.styling ? " style='text-align:center;'" : "",
        'profile_image': this.options.styling ? " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'" : "",
        'profile_name': this.options.styling ? " style='font-size:1.2em;'" : "",
        'profile_biography': this.options.styling ? " style='font-size:1em;'" : "",
        'gallery_image': this.options.styling ? " style='margin:" + this.options.margin + "% " + this.options.margin + "%;width:" + width + "%;float:left;'" : ""
      }

      // Profile
      var html = "";
      if (this.options.display_profile) {
        html += "<div class='instagram_profile'" + styles.profile_container + ">";
        html += "<img class='instagram_profile_image'" + (this.options.lazy_load ? " loading='lazy'" : '') + " src='" + data.profile_pic_url + "' alt='" + (this.is_tag ? data.name + " tag pic" : data.username + " profile pic") + " profile pic'" + styles.profile_image + " />";
        if (this.is_tag)
          html += "<p class='instagram_tag'" + styles.profile_name + "><a href='https://www.instagram.com/explore/tags/" + this.options.tag + "' rel='noopener' target='_blank'>#" + this.options.tag + "</a></p>";
        else
          html += "<p class='instagram_username'" + styles.profile_name + ">@" + data.full_name + " (<a href='https://www.instagram.com/" + this.options.username + "' rel='noopener' target='_blank'>@" + this.options.username + "</a>)</p>";

        if (!this.is_tag && this.options.display_biography)
          html += "<p class='instagram_biography'" + styles.profile_biography + ">" + data.biography + "</p>";

        html += "</div>";
      }

      // Gallery
      if (this.options.display_gallery) {
        var image_index = typeof image_sizes[this.options.image_size] !== "undefined" ? image_sizes[this.options.image_size] : image_sizes[640];

        if (typeof data.is_private !== "undefined" && data.is_private === true) {
          html += "<p class='instagram_private'><strong>This profile is private</strong></p>";
        } else {
          var imgs = (data.edge_owner_to_timeline_media || data.edge_hashtag_to_media).edges;
          max = (imgs.length > this.options.items) ? this.options.items : imgs.length;

          html += "<div class='instagram_gallery'>";

          for (let i = 0; i < max; i++) {
            var url = "https://www.instagram.com/p/" + imgs[i].node.shortcode,
              image, type_resource,
              caption = escape_string(this.parse_caption(imgs[i], data));
              image = imgs[i].node.thumbnail_resources[image_index].src;
            // switch (imgs[i].node.__typename) {
            //   case "GraphSidecar":
            //     type_resource = "sidecar"
            //     image = imgs[i].node.thumbnail_resources[image_index].src;
            //     break;
            //   case "GraphVideo":
            //     type_resource = "video";
            //     image = imgs[i].node.thumbnail_src
            //     break;
            //   default:
            //     type_resource = "image";
            //     image = imgs[i].node.thumbnail_resources[image_index].src;
            // }

            if (this.is_tag) data.username = '';
            html += "<a href='" + url + "' class='instagram-" + type_resource + "' title='" + caption + "' rel='noopener' target='_blank'>";
            html += "<img" + (this.options.lazy_load ? " loading='lazy'" : '') + " src='" + image + "' alt='" + caption + "'" + styles.gallery_image + " />";
            html += "</a>";
          }

          html += "</div>";
        }
      }

      // IGTV
      if (this.options.display_igtv && typeof data.edge_felix_video_timeline !== "undefined") {
        var igtv = data.edge_felix_video_timeline.edges,
          max = (igtv.length > this.options.items) ? this.options.items : igtv.length
        if (igtv.length > 0) {
          html += "<div class='instagram_igtv'>";
          for (let i = 0; i < max; i++) {
            var url = "https://www.instagram.com/p/" + igtv[i].node.shortcode,
              caption = this.parse_caption(igtv[i], data);

            html += "<a href='" + url + "' rel='noopener' title='" + caption + "' target='_blank'>";
            html += "<img" + (this.options.lazy_load ? " loading='lazy'" : '') + " src='" + igtv[i].node.thumbnail_src + "' alt='" + caption + "'" + styles.gallery_image + " />";
            html += "</a>";
          }
          html += "</div>";
        }
      }

      this.options.container.innerHTML = html;
      return html;
    };

    this.run = function () {
      this.get(function (data, instance) {
        if (instance.options.container !== "") {
          instance.display(data);
        }
        if (typeof instance.options.callback === "function") {
          instance.options.callback(data);
        }
        if (instance.options.callbackOnHtml && typeof instance.options.callbackOnHtml === "function") {
          let finalHtml = instance.display(data);
          instance.options.callbackOnHtml(finalHtml);
        }
      });
    };

    if (this.valid) {
      this.run();
    }
  };
}));
