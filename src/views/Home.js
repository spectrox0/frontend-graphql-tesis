import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SideBar from "../components/Home/SideBar.js";
import Chat from "../components/Home/Chat.js";

export default function Home({ updateUser }) {
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  const [postId, setPostId] = useState();

  const onClick = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };
  const closeSideBar = () => {
    if (isOpenSideBar) setIsOpenSideBar(false);
  };
  const changePost = idPost => {
    setPostId(idPost);
  };
  return (
    <div className="Home">
      <SideBar
        onClick={onClick}
        closeSideBar={closeSideBar}
        isOpenSideBar={isOpenSideBar}
        changePost={changePost}
        postId={postId}
        updateUser={updateUser}
      />
      <Chat onClick={onClick} postId={postId} />
    </div>
  );
}
