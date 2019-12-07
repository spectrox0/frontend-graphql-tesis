import React from "react";
import { MDBIcon, MDBContainer } from "mdbreact";

export default function Conversations(props) {
  return (
    <MDBContainer className="searchInput">
      <input
        className={props.value ? "active" : null}
        id="search"
        type="text"
        {...props}
      />
      <label className={props.value ? "active" : null} for="search">
        {" "}
        <MDBIcon icon="search" />{" "}
      </label>
    </MDBContainer>
  );
}
