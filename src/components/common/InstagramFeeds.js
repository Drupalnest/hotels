import React, { useState, useEffect } from "react";
import Instagram from "../../utils/Instagram";

const InstagramFeeds = (props) => {
  let [instaFeed, setInstaFeed] = useState('');
  let [feedLoaded, setFeedLoaded] = useState(false);

  const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const isMobile = windowWidth <= 768;

  const config = {
    totalImgInDesktop: props.totalImgInDesktop || 5,
    totalImgInMobile: props.totalImgInMobile || 4,
    imgPerRowDesktop: props.imgPerRowDesktop || 5,
    imgPerRowMobile: props.imgPerRowMobile || 2
  }

  useEffect(() => {
    let didCancel = false;
    const loadImages = () => {
      new Instagram({
        'username': props.username,
        'items': isMobile ? config.totalImgInMobile : config.totalImgInDesktop,
        'items_per_row': isMobile ? config.imgPerRowMobile : config.imgPerRowDesktop,
        'margin': 0,
        'image_size': 240,
        'lazy_load': true,
        'callbackOnHtml': function (html) {
          if (!didCancel) {
            setInstaFeed(html);
            setFeedLoaded(true);
          }
        },
        on_error: function (error_description, error_code) {
          console.error(error_description)
        }
      });
    }
    !feedLoaded && loadImages()

    // Cleanup on unmount.
    return () => {
      didCancel = true;
    }
  }, []);

  return instaFeed && <div dangerouslySetInnerHTML={{__html: instaFeed}}/>

}

export default InstagramFeeds;
