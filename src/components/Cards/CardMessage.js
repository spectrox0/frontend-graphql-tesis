import React from "react";

import {
  MDBCard as Card,
  MDBCardBody as Body,
  MDBCol as Col,
  MDBCardText as Text,
  MDBRow as Row
} from "mdbreact";

export default function CardMessage({ content, date, user, userId, options }) {
  return (
    <Card
      className={
        "cardMessage " +
        (userId === user._id ? "align-self-start" : "other align-self-end")
      }
    >
      <Body>
        <Col>
          <img src={user.urlImg} alt="" />
        </Col>
        <Col size="10" sm="11">
          <div className="info">
            <p className="user"> {"@" + user.username}</p>
            <p className="date">
              {new Date(date).toLocaleString("en-VE", options)}{" "}
            </p>
          </div>
          <Text> {content}</Text>
        </Col>
      </Body>
    </Card>
  );
}
