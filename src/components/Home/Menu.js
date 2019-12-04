import React from "react";
import { MDBIcon } from "mdbreact";
export default function SideBar({ options, changeOption }) {
  return (
    <nav>
      <ul>
        <li
          className={options === 0 ? "option_1 active" : "option_1"}
          onClick={() => changeOption(0)}
        >
          <div className="item">
            {" "}
            <MDBIcon icon="comments" /> Chats{" "}
          </div>
        </li>

        <li
          className={options === 1 ? "option_2 active" : "option_2"}
          onClick={() => changeOption(1)}
        >
          <div className="item">
            {" "}
            <MDBIcon icon="search" /> Search{" "}
          </div>
        </li>
        <li
          className={options === 2 ? "option_3 active" : "option_3"}
          onClick={() => changeOption(2)}
        >
          <div className="item">
            {" "}
            <MDBIcon icon="plus" /> Create
          </div>
        </li>
      </ul>
    </nav>
  );
}
