import React, { useState } from "react";
import Header from "./HeaderSideBar";
import Menu from "./Menu";
import Settings from "./Settings";
import InfoUser from "./InfoUser";

import Switch from "./Switch.js";

export default function SideBar({
  isOpenSideBar,
  onClick,
  changePost,
  postId
}) {
  const [options, setOptions] = useState(0);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const openSettings = () => {
    setIsOpenSettings(!isOpenSettings);
  };
  const changeOption = value => {
    if (value !== options) setOptions(value);
  };
  return (
    <>
      <div className={isOpenSideBar ? "sideBar isOpen" : "sideBar"}>
        <div>
          <Header onClick={onClick} />
          <Menu options={options} changeOption={changeOption} />
        </div>
        <Switch options={options} changePost={changePost} postId={postId} />
        <InfoUser toggle={openSettings} />
        <Settings toggle={openSettings} isOpen={isOpenSettings} />
      </div>{" "}
    </>
  );
}
