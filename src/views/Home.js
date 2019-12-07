import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SideBar from "../components/Home/SideBar.js";
import Chat from "../components/Home/Chat.js";

export default function Auth() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [postId, setPostId] = useState();

  const onClick = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  const changePost = idPost => {
    setPostId(idPost);
  };
  return (
    <div className="Home">
      <SideBar
        onClick={onClick}
        isOpenSideBar={isOpenSideBar}
        changePost={changePost}
        postId={postId}
      />
      <Chat onClick={onClick} postId={postId} />
    </div>
  );
}
