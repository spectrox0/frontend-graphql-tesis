import React from "react";

import {
  MDBCard as Card,
  MDBCardBody as Body,
  MDBCol as Col,
  MDBRow as Row
} from "mdbreact";

export default function CardPost({
  _id,
  title,
  date,
  urlImg,
  lastMessage,
  changePost,
  postId
}) {
  const options = {
    timeZone: "UTC",
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  return (
    <Card
      className={"cardPost " + (postId == _id ? "active" : "")}
      onClick={() => changePost(_id)}
    >
      <Body>
        <Col className="colImg">
          <img className="imgPost" src={urlImg} alt="" />
        </Col>
        <Col size="9" className="content">
          <Row>
            <h3> {title} </h3>
            <span> {new Date(date).toLocaleString("en-VE", options)} </span>
          </Row>
          <Row>
            <p>asdasdasd </p>
          </Row>
        </Col>
      </Body>
    </Card>
  );
}
