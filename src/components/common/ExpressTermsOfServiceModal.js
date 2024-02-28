// import React from "react";
// import Modal from "react-bootstrap/Modal";
// import { useStaticQuery, graphql } from "gatsby";
// import styled from "styled-components";
// import { Title5, Subtitle } from "../styles/theme";

// const StyledDialog = styled(Modal)`
//   .modal-body {
//     /* margin: 0 35px 30px 35px; */
//     padding: 25px;
//   }
// `

// const ExpressTermsOfServiceModal = (props) => {
//   const data = useStaticQuery(graphql`
//     {
//       allNodePage(filter: {path: {alias: {eq: "/express-terms-service"}}}) {
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
//   if (data.allNodePage.edges.length) {
//     terms = data.allNodePage.edges[0].node;
//   }

//   return (
//     <StyledDialog
//       size="lg"
//       show={props.show}
//       onHide={props.onHide}
//       centered
//       scrollable={true}
//       aria-labelledby="express-termsofservice-modal"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="express-termsofservice-modal">
//           <Title5>Express Check In / Check Out</Title5>
//           <Subtitle>Short Message Service (SMS) Terms & Conditions</Subtitle>
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {terms &&
//         <div dangerouslySetInnerHTML={{__html: terms.body.processed}}/>
//         }
//       </Modal.Body>
//     </StyledDialog>
//   )

// }
// export default ExpressTermsOfServiceModal;
