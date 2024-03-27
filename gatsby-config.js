/**
 * @type {import('gatsby').GatsbyConfig}
 */

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = {
  siteMetadata: {
    title: `hotel_site_neww`,
    siteUrl: `https://www.yourdomain.tld`,
  },



  developMiddleware: (app) => {
    app.use(
      '/proxy',
      createProxyMiddleware({
        target: 'http://165.227.127.224',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': '', // remove '/proxy' from the request path
        },
      })
    );
  },
  
 

  plugins: [
    "gatsby-plugin-postcss",
    // {
    //   resolve: `gatsby-source-drupal`,
    //   options: {
    //     baseUrl: `http://165.227.127.224/`,
    //     apiBase: `jsonapi`, // optional, defaults to `jsonapi`
    //     skipFileDownloads: true,
    //   },
    // },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://165.227.127.224/`,
        apiBase: `jsonapi/hotels`,
        skipFileDownloads: true,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },

    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            'Montserrat:100,100i,400,400i,700,700i,800', // Thin, Thin Italic, Regular, Italic, Bold, Bold Italic, Extra Bold
          ],
        },
      },
    },
  ],
};
