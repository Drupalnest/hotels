import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { parseDate } from "../../../apis/dates";
import differenceInDays from 'date-fns/differenceInDays';
import {
  Popover,
  OverlayTrigger,
  Table
} from "react-bootstrap";

const StyledPopover = styled(Popover)`
    max-width: 510px;
    @media(max-width: 991px) {
      max-width: 310px;
    }
    border: none;
    background-color: #f7f7f7;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    text-align: left;
    position: absolute;
    top: 100%;
    z-index: 99999;
    .popover-body {
      padding: 0 12px;
      margin-bottom: 12px;
      max-height: 150px;
      overflow: scroll;
      background-color: #f7f7f7;
    }
    .popover-header {
      border-bottom: none;
      p {
        font-size: 12px;
        line-height: normal;
      }
      .title {
        font-size: 14px;
        font-weight: 700;
      }
    }
`;

const StyledTable = styled(Table)`
  table {
    border-collapse: collapse;
    overflow-x: scroll;
    display: block;
    margin: 10px;
  }

  thead {
    background-color: #D9D9D9;
  }
  tbody {
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #fff;
  }
  td, th {
    min-width: 100px;
    height: 25px;
    overflow:hidden;
  }
  thead {
    th {
      border-top: none;
      border-bottom: none;
    }
  }
`;

const PerksDetails = ({perks}) => {
  let today = new Date();
  let perksRows = perks.map((perk) => {
    let exp = parseDate(perk.expiration, 'm-d-yyyy');
    let expiredDays = differenceInDays(today, exp);
    if (expiredDays < 60) {
      return (
        <tr>
          <td>{perk.title}</td>
          <td>{perk.expiration}</td>
          <td>{perk.status_description}</td>
          <td>{perk.voucher_number}</td>
        </tr>
      );
    }
    return null;
  });

  const perksAvailable = perksRows.length > 0;
  const popover = (
    <StyledPopover>
      <Popover.Title>
        <p>
          Member can receive Hello Perks, surprising extras like digital gift cards. Track your Hello Perks and redeem
          them here. Each Hello Perk has its own expiration date which you can view in table below.
        </p>
        {perksAvailable ?
          <div className="title">My Hello Perks</div>
          :
          <p className="text-center m-1">No perks available</p>
        }
      </Popover.Title>
      <Popover.Content>
        {perksAvailable &&
        <StyledTable bordered hover responsive="sm" size="sm">
          <thead>
          <tr>
            <th>Type</th>
            <th>Expiration</th>
            <th>Status</th>
            <th>Perk Number</th>
          </tr>
          </thead>
          <tbody>
          {perksRows}
          </tbody>
        </StyledTable>
        }
      </Popover.Content>
    </StyledPopover>
  );

  return (
    <>
      <OverlayTrigger trigger="click" placement="bottom" rootClose={true} overlay={popover}>
        <FontAwesomeIcon icon={faInfoCircle} size="sm"/>
      </OverlayTrigger>
    </>
  );
};
export default PerksDetails;
