import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";

export default function Notification() {
  return (
    <MDBDropdown>
      <MDBDropdownToggle className="btn-send">
        <div className="notifications"> 1 </div>
        <MDBIcon icon="bell" />
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another Action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
