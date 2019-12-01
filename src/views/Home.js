import React, {useState, useEffect} from 'react'; 
import {
    MDBContainer, 
    MDBRow, 
    MDBCol
} from 'mdbreact';
import SideBar from '../components/Home/SideBar.js'
import Chat from '../components/Home/Chat.js'


export default function Auth() {
 

 return (
  <div className="Home"> 
  <SideBar/>
  <Chat/>
  </div>
 )

}