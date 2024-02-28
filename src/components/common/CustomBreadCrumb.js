import React from "react";
import styled from "styled-components";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { colors } from "../styles/theme.js";

const StyledBreadCrumb = styled(Breadcrumb)`
  .breadcrumb {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    justify-content: center;
    background-color: #f3f3f3;
    .breadcrumb-item {
      font-size: 12px;
      font-weight: bold;
      line-height: 16px;
      .counter {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 18px;
        width: 18px;
        border: 1px solid #404040;
        border-radius: 50%;
      }
    }
    .breadcrumb-item.active {
      color: ${colors.primary};
      .counter {
        background-color: ${colors.primary};
        color: #fff;
        border: 0;
      }
    }
    .postactive,
    .postactive .counter {
      color: #d1d1d1;
      border-color: #d1d1d1;
    }
    li + li:before {
      content: "";
    }
  }
`;

const CustomBreadCrumb = ({ step, crumbs, location }) => {
  let crumbItems = crumbs.map((crumb, idx) => {
    let itemClass = "";
    if (!step) {
      step = crumb.page == location.pathname ? idx : null;
    }
    if (idx == step) {
      itemClass = "active";
    } else if (step && idx > step) {
      itemClass = "postactive";
    }
    return (
      <Breadcrumb.Item
        key={`customCrumb-${idx}`}
        linkAs="span"
        className={itemClass}
        aria-current={itemClass == "active" ? "page" : false}
      >
        <span className="counter text-center my-auto mr-1">{idx + 1}</span>
        <span
          className={`crumb-label my-auto ${
            itemClass != "active" && "d-none d-lg-inline"
          }`}
        >
          {crumb.text}
        </span>
      </Breadcrumb.Item>
    );
  });
  return step && <StyledBreadCrumb>{crumbItems}</StyledBreadCrumb>;
};

export default CustomBreadCrumb;
