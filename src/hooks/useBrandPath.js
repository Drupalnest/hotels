import { useStaticQuery, graphql } from "gatsby";

export const useBrandPath = (brandId) => {
//   const data = useStaticQuery(graphql`
//     {
//       allBrand {
//         nodes {
//           name
//           brand_code
//           drupal_internal__id
//           path {
//             alias
//           }
//         }
//       }
//     }
//   `);

//   if(brandId) {
//     let filteredBrand = data.allBrand.nodes.filter(n => n.drupal_internal__id == brandId)[0];
//     let brandPathAlias = filteredBrand.path && filteredBrand.path.alias;
//     if(brandPathAlias == '/signature') {
//       let signatureInnBrand = data.allBrand.nodes.filter(n => n.brand_code == 'SIG INN')[0];
//       brandPathAlias = signatureInnBrand.path && signatureInnBrand.path.alias;
//     }
//     return brandPathAlias;
//   } else {
//     return null;
//   }
}
