import React from "react";
import Toggle from "../toggle.js";
import { MDBIcon, MDBBtn } from "mdbreact";
export default function HeaderSideBar({ onClick }) {
  return (
    <header>
      <div className="logo">
        <h1> Tesis </h1>
      </div>
      <div className="icons">
        <MDBBtn className="btn-send">
          <MDBIcon icon="bell" />
        </MDBBtn>

        <Toggle onClick={onClick} />
      </div>
    </header>
  );
}
