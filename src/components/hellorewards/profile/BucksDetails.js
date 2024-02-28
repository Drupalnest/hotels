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


const BucksDetails = ({bucks}) => {
  let today = new Date();
  let keyCnt = 0;
  let buckRows = bucks.map((buck) => {
    let exp = parseDate(buck.expiration, 'm-d-yyyy');
    let expiredDays = differenceInDays(today, exp);
    if (expiredDays < 60) {
      return (
        <tr key={`bucks-${keyCnt++}`}>
          <td>{buck.amount}</td>
          <td>{buck.balance}</td>
          <td> {buck.expiration} </td>
        </tr>
      );
    }
    return null;
  });

  const bucksAvailable = buckRows.length > 0;

  const popover = (
    <StyledPopover>
      <Popover.Title>
        <p>
          Members earn Hello Bucks on every qualifying stay, which are deposited in your Hello Rewards account after
          checkout. Apply Hello Bucks on your next stay or save up. One Hello Buck is worth one dollar when you apply
          them to your reservation on <a href="/">redlion.com</a>. Each award of Hello Bucks has its own expiration date
          which you can view in table below.
        </p>
        {bucksAvailable ?
          <div className="title">My Hello Bucks</div>
          :
          <p className="text-center m-1">No bucks available</p>
        }
      </Popover.Title>
      <Popover.Content>
        {bucksAvailable &&
        <StyledTable bordered hover responsive="sm" size="sm">
          <thead>
          <tr>
            <th>Amount</th>
            <th>Balance</th>
            <th>Expiration</th>
          </tr>
          </thead>
          <tbody>
          {buckRows}
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
export default BucksDetails;
