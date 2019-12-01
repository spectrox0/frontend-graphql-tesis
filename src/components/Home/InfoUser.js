import React, {useContext} from 'react';
import {MDBRow , MDBCol, MDBIcon , MDBBtn} from 'mdbreact';
import AuthContext from '../../helpers/context/auth-context';
export default function InfoUser() {
  const {logout, urlImg, name , username} = useContext(AuthContext);
  
  return (<footer>
       <MDBRow> 
  <MDBCol sm="5">
  <img className="imgProfile" src={urlImg} alt="" /> 
   </MDBCol>
  <MDBCol sm="7">
       <MDBRow> 
  <p className="name"> {name}</p> 
          <p className="username"> @{username}</p>
       </MDBRow>
         <MDBRow className="options"> 
       
            <MDBBtn className="btn-send"> 
            <MDBIcon icon="cogs" />
            </MDBBtn>
            <MDBBtn className="btn-send"> 
            <MDBIcon icon="sign-out" onClick={logout}/>
            </MDBBtn> 
            </MDBRow>
         
  </MDBCol>
       </MDBRow>
          
        
      
  </footer>  )

}