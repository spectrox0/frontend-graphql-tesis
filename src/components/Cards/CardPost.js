import React from 'react';

import {MDBCard as Card , MDBCardBody as Body , MDBCol as Col , MDBRow as Row} from 'mdbreact';

export default function CardPost({title, date,urlImg, lastMessage, onClick}) {
    
 return (
     <Card className="cardPost" onClick={onClick}> 
      <Body> 
          <Col size="2" className="colImg">
          <img className="imgPost" src={urlImg} alt="" /> 
          </Col>
        <Col size="9" className="content"> 
     
            <Row>
            <h3> {title} </h3>
             <span> {date} </span>
            </Row>
           <Row> 
           <p>asdasdasd </p>
           </Row>
            
     
        </Col>
      </Body>
      
     </Card>
 )
}