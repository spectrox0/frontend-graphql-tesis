import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import CardNotifications from "./../Cards/CardNotification";
import { DELETE_NOTIFICATIONS } from "../../helpers/graphql/mutations/mutations";
import { useMutation } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";
export default function Notification({ notifications, subscribeToNews }) {
  const [deleteNotification, { data, loading, error }] = useMutation(
    DELETE_NOTIFICATIONS
  );
  const DeleteNotifications = () => {
    deleteNotification({
      variables: {
        postId,
        userId
      }
    });
  };
  const Notifications = ({ notifications }) =>
    notifications.map(notification => (
      <MDBDropdownItem key={notification._id}>
        <CardNotifications options={options} {...notification} />
      </MDBDropdownItem>
    ));

  React.useEffect(() => {
    subscribeToNews();
  }, [subscribeToNews]);
  const options = {
    timeZone: "UTC",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };

  return (
    <MDBDropdown>
      <MDBDropdownToggle className="btn-send">
        <div className="notifications"> {notifications.length} </div>
        <MDBIcon icon="bell" />
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <Notifications notifications={notifications} />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
