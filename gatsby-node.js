// gatsby-node.js
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for hotel data
  const result = await graphql(`
    query {
      allHotel {
        nodes {
          id
          name
          address {
            address_line1
            address_line2
            // Add other fields as needed
          }
        }
      }
    }
  `);

  // Create a page for each hotel
  result.data.allHotel.nodes.forEach((hotel) => {
    createPage({
      path: `/hotels/${hotel.id}`,
      component: path.resolve('./src/templates/hotel-details.js'),
      context: {
        hotel,
      },
    });
  });
};
