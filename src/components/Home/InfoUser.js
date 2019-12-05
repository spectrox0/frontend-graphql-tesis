import React, { useContext } from "react";
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import AuthContext from "../../helpers/context/auth-context";
export default function InfoUser({ toggle }) {
  const { logout, urlImg, name, username } = useContext(AuthContext);

  return (
    <footer>
      <MDBRow>
        <MDBCol>
          <img className="imgProfile" src={urlImg} alt="" />
        </MDBCol>
        <MDBCol>
          <MDBRow>
            <p className="name"> {name}</p>
            <p className="username"> @{username}</p>
          </MDBRow>
          <MDBRow className="options">
            <MDBBtn className="btn-send" onClick={toggle}>
              <MDBIcon icon="cogs" />
            </MDBBtn>
            <MDBBtn className="btn-send">
              <MDBIcon icon="sign-out" onClick={logout} />
            </MDBBtn>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </footer>
  );
}
