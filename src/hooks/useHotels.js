// import { useStaticQuery, graphql } from "gatsby";

// export const useHotels = () => {
//   const hotels = useStaticQuery(graphql`
//     {
//       allHotel {
//         nodes {
//           name
//           crs_code
//           crs_name
//           hotel_code
//           address {
//             langcode
//             country_code
//             administrative_area
//             locality
//             postal_code
//             address_line1
//             address_line2
//             administrative_area_name
//           }
//           banner_images {
//             url
//             alt
//             width
//             height
//           }
//           email
//           phone
//           path {
//             alias
//           }
//           relationships {
//             brand_id {
//               name
//               brand_code
//               description {
//                 summary
//                 processed
//                 value
//               }
//               path {
//                 alias
//               }
//               field_color {
//                 color
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   // let hotelsByCode = convertArrayToObject(hotels.allHotel.nodes, 'hotel_code');
//   return hotels.allHotel.nodes;
// }
