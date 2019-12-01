import React, {useState, useEffect} from 'react'; 
import {
    MDBContainer, 
    MDBRow, 
    MDBCol
} from 'mdbreact';
import Control from '../components/Auth/controls';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';

export default function Auth() {
 
  const [signIn, setSignIn] = useState(true);
 
  const switchSign = (value) => {
   setSignIn(value);
  }

 return (
  <div className="pageAuth"> 
  <MDBContainer className="containerAuth"> 
   <Control isSignIn={signIn} switchSign={switchSign} />
     <div className="forms"> 
     <SignIn isSignIn={signIn}/> 
     <SignUp isSignIn={signIn}/> 
     </div>
  </MDBContainer>
  </div>
 )

}