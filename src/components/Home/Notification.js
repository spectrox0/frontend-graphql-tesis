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

export default function Notification({
  notifications,
  subscribeToNews,
  update
}) {
  const [deleteNotification, { data, loading, error }] = useMutation(
    DELETE_NOTIFICATIONS
  );
  const { userId } = useSelector(state => ({
    ...state.User
  }));

  const dispatch = useDispatch();

  const changePost = async (postId, creator, urlImg, title) => {
    console.log(postId);
    dispatch({
      type: "CHANGE_POST",
      payload: {
        postId,
        creator,
        urlImg,
        title
      }
    });
    dispatch({
      type: "CLOSE_SIDEBAR"
    });
    const { data } = await deleteNotification({
      variables: {
        postId,
        userId
      }
    });
    if (data) update();
  };
  const Notifications = ({ notifications }) =>
    notifications.map(notification => (
      <MDBDropdownItem key={notification._id}>
        <CardNotifications
          options={options}
          {...notification}
          onClick={changePost}
        />
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
      {notifications.length > 0 && (
        <MDBDropdownMenu basic>
          <Notifications notifications={notifications} />
        </MDBDropdownMenu>
      )}
    </MDBDropdown>
  );
}
