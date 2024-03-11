const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allHotel {
        nodes {
          id
          name
          status
        }
      }
    }
  `);

  result.data.allHotel.nodes.forEach((hotel) => {
    createPage({
      path: `/hotels/${hotel.id}`,
      component: path.resolve("./src/templates/hoteldetails.js"),
      context: {
        id: hotel.id,
        name: hotel.name,
        status: hotel.status,
      },
    });
  });
  
};
