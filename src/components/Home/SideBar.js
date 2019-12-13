import React, { useState } from "react";
import Header from "./HeaderSideBar";
import Menu from "./Menu";
import Settings from "./Settings";
import InfoUser from "./InfoUser";

import Switch from "./Switch.js";
import { useDispatch } from "react-redux";

export default function SideBar({
  isOpenSideBar,
  changePost,
  postId,
  closeSideBar,
  updateUser
}) {
  const [options, setOptions] = useState(0);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const dispatch = useDispatch();
  const openSettings = () => {
    setIsOpenSettings(!isOpenSettings);
  };
  const changeOption = value => {
    if (value !== options) setOptions(value);
  };
  const onClick = () => {
    dispatch({
      type: "TOGGLE"
    });
  };
  return (
    <>
      <div className={isOpenSideBar ? "sideBar isOpen" : "sideBar"}>
        <div>
          <Header onClick={onClick} />
          <Menu options={options} changeOption={changeOption} />
        </div>
        <Switch
          options={options}
          changeOption={changeOption}
          changePost={changePost}
          postId={postId}
          closeSideBar={closeSideBar}
          updateUser={updateUser}
        />
        <InfoUser toggle={openSettings} />
        <Settings toggle={openSettings} isOpen={isOpenSettings} />
      </div>{" "}
    </>
  );
}
