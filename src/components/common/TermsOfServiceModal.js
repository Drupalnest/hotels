// import React from "react";
// import Modal from "react-bootstrap/Modal";
// import { useStaticQuery, graphql } from "gatsby";
// import styled from "styled-components";

// const StyledDialog = styled(Modal)`
//   .modal-body {
//     /* margin: 0 35px 30px 35px; */
//     padding: 25px;
//   }
// `;

// const TermsOfServiceModal = (props) => {
//   const data = useStaticQuery(graphql`
//     {
//       allNodeGenericPage(
//         filter: { path: { alias: { eq: "/RLH-Terms-Conditions" } } }
//       ) {
//         edges {
//           node {
//             title
//             path {
//               alias
//             }
//             body {
//               processed
//               value
//             }
//           }
//         }
//       }
//     }
//   `);
  
//   let terms = null;
//   if (data.allNodeGenericPage.edges.length) {
//     terms = data.allNodeGenericPage.edges[0].node;
//   }

//   return (
//     <StyledDialog
//       size="lg"
//       show={props.show}
//       onHide={props.onHide}
//       centered
//       scrollable={true}
//       aria-labelledby="termsofservice-modal"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="termsofservice-modal">Terms of Service</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {terms && (
//           <div dangerouslySetInnerHTML={{ __html: terms.body.processed }} />
//         )}
//       </Modal.Body>
//     </StyledDialog>
//   );
// };
// export default TermsOfServiceModal;
