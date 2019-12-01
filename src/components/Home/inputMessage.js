import React from 'react';
import {MDBBtn , MDBIcon , MDBRow} from 'mdbreact';

export default function inputMessage() {
    return(
        <MDBRow className="inputMessage"> 
            <input type="text" placeholder="escribe tu mensaje" />
            <MDBBtn className="btn-send"> 
            <MDBIcon icon="send" />
            </MDBBtn>
        </MDBRow>
    )
}