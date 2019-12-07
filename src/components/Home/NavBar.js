import React, { useContext } from "react";
import AuthContext from "../../helpers/context/auth-context";
import {
  MDBIcon,
  MDBNavbar,
  MDBNavItem,
  MDBNavbarNav,
  MDBBtn,
  MDBNavbarBrand
} from "mdbreact";
import Toggle from "../toggle";
export default function Chat({ onClick, title, urlImg }) {
  const { logout } = useContext(AuthContext);
  return (
    <MDBNavbar expand="lg">
      {title && urlImg && (
        <MDBNavbarBrand>
          <img src={urlImg} alt="" />
          <div className="title">
            <p> {title}</p>
          </div>
        </MDBNavbarBrand>
      )}

      <MDBNavbarNav right>
        <MDBNavItem>
          <Toggle onClick={onClick} />
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}
