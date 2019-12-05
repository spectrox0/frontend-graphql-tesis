import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SideBar from "../components/Home/SideBar.js";
import Chat from "../components/Home/Chat.js";

export default function Auth() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const onClick = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  return (
    <div className="Home">
      <SideBar onClick={onClick} isOpenSideBar={isOpenSideBar} />
      <Chat onClick={onClick} />
    </div>
  );
}
