import React from "react";
import Modal from "react-bootstrap/Modal";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const StyledDialog = styled(Modal)`
  .modal-body {
    /* margin: 0 35px 30px 35px; */
    padding: 25px;
  }
`

const PrivacyModal = (props) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allNodePage(filter: {path: {alias: {eq: "/privacy"}}}) {
  //       edges {
  //         node {
  //           title
  //           path {
  //             alias
  //           }
  //           body {
  //             processed
  //             value
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // let privacy = null;
  // if (data.allNodePage.edges.length) {
  //   privacy = data.allNodePage.edges[0].node;
  // }

  return (
    <StyledDialog
      size="lg"
     // show={props.show}
     // onHide={props.onHide}
      centered
      scrollable={true}
      aria-labelledby="privacy-policy-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="privacy-policy-modal">Privacy Policy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {privacy &&
        <div dangerouslySetInnerHTML={{__html: privacy.body.processed}}/>
        } */}
      </Modal.Body>
    </StyledDialog>
  )

}
export default PrivacyModal;
