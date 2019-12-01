import React from 'react';
import {MDBBtn , MDBIcon} from 'mdbreact';

export default function inputMessage() {
    return(
        <div className="inputMessage"> 
            <input type="text" placeholder="escribe tu mensaje" />
            <MDBBtn className="btn-send"> 
            <MDBIcon icon="send" />
            </MDBBtn>
        </div>
    )
}