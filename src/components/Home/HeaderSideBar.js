import React from "react";
import Toggle from "../toggle.js";
import Notification from "./Notification";
import { MDBRow, MDBCol } from "mdbreact";

export default function HeaderSideBar({ onClick }) {
  return (
    <header>
      <MDBCol size="9" className="logo">
        <h1> CodeLine </h1>
      </MDBCol>
      <MDBCol size="3" style={{ display: "flex" }}>
        <Notification />
        <Toggle onClick={onClick} />
      </MDBCol>
    </header>
  );
}
