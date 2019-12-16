import React from "react";

import {
  MDBCard as Card,
  MDBCardBody as Body,
  MDBCol as Col,
  MDBCardImage as Img,
  MDBCardText as Text,
  MDBRow as Row
} from "mdbreact";

export default function CardNotification({
  options,
  message: {
    content,
    date,
    user: { urlImg, username }
  }
}) {
  return (
    <Card className="card-notification">
      <Body>
        <Img waves src={urlImg} />{" "}
        <Text>
          {" "}
          {"@" + username + " "} : {content}
          <br />
          {new Date(date).toLocaleString("en-VE", options)}
        </Text>
      </Body>
    </Card>
  );
}
