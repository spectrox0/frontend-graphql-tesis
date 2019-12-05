import React from "react";

import { MDBCard as Card, MDBModalBody as Body } from "mdbreact";

export default function CardCategory({ name, value, onClick }) {
  return (
    <Card className="cardCategory" onClick={onClick}>
      <Body>
        <p> {name} </p>
      </Body>
    </Card>
  );
}
