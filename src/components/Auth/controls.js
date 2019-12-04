import React from "react";

export default function ControlAuth({ switchSign, isSignIn }) {
  return (
    <div className="controlSwitch">
      <span
        className={isSignIn ? "active" : ""}
        onClick={() => switchSign(true)}
      >
        {" "}
        Sign In
      </span>
      <span
        className={isSignIn ? "" : "active"}
        onClick={() => switchSign(false)}
      >
        {" "}
        Sign Up
      </span>
    </div>
  );
}
