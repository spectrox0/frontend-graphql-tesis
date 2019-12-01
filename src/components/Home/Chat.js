import React, {useContext} from 'react';
import AuthContext from '../../helpers/context/auth-context'
import InputMessage from './inputMessage';
import {MDBIcon , MDBNav, MDBNavbar, MDBNavItem, MDBNavbarNav, MDBBtn} from 'mdbreact'
import Toggle from '../toggle';
export default function Chat({onClick}) {
    const {logout} = useContext(AuthContext);
    return (
        <div className="chat" >
            <MDBNavbar expand="lg">
              <Toggle onClick={onClick} />
              <MDBNavbarNav right> 
              <MDBNavItem>
              <MDBBtn onClick={logout}> 
              <MDBIcon icon="sign-out" />
              </MDBBtn>
              </MDBNavItem>

              </MDBNavbarNav>
            </MDBNavbar>
        <div className="messages" >
       
      
        </div>
        
        <InputMessage />
        </div>
    )
}