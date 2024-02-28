import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  position: relative;
  left: 0;
  top: -92px;
  visibility: hidden;
`;

const ParagraphAnchorLink = ({id}) => {
  return (
    <Anchor href="#" className="anchor-target" id={`paragraph-${id}`} aria-hidden="true">{`paragraph-${id}`}</Anchor>
  )
}
export default ParagraphAnchorLink;
