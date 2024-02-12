const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allHotel {
        nodes {
          id
          name
          phone
          status
        }
      }
    }
  `);

  result.data.allHotel.nodes.forEach((hotel) => {
    createPage({
      path: `/hotels/${hotel.id}`,
      component: path.resolve("./src/templates/hotel-details.js"),
      context: {
        id: hotel.id,
        name: hotel.name,
        phone: hotel.phone,
      },
    });
  });
};
