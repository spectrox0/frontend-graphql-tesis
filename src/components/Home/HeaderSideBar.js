import React from "react";
import Toggle from "../toggle.js";
import Notification from "./Notification";
import { MDBRow, MDBCol } from "mdbreact";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { QUERY_NOTIFICATIONS } from "../../helpers/graphql/querys/querys";
import { NOTIFICATION_ADDED_SUSCRIPTION } from "../../helpers/graphql/subscription/subcription";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import CardMessage from "../Cards/CardMessage";
export default function HeaderSideBar({ onClick }) {
  const { userId } = useSelector(state => ({ ...state.User }));
  const { data, loading, error, subscribeToMore } = useQuery(
    QUERY_NOTIFICATIONS,
    {
      variables: {
        userId: userId
      }
    }
  );
  const alert = useAlert();
  const {
    data: dataNewNotification,
    loading: loadingNotification,
    error: errorNotification
  } = useSubscription(NOTIFICATION_ADDED_SUSCRIPTION, {
    variables: {
      userId: userId
    }
  });
  const subscribeToNews = () => {
    subscribeToMore({
      document: NOTIFICATION_ADDED_SUSCRIPTION,
      variables: {
        userId: userId
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newNotification = subscriptionData.data.notificationAdded;
        if (!prev.notifications.find(msg => msg._id === newNotification._id)) {
          const res = Object.assign({}, prev, {
            notifications: [newNotification, ...prev.notifications]
          });
          alert.show(<CardMessage {...newNotification.message} />);
          return res;
        } else return prev;
      }
    });
  };
  return (
    <header>
      <MDBCol size="9" className="logo">
        <h1> CodeLine </h1>
      </MDBCol>
      <MDBCol size="3" style={{ display: "flex", justifyContent: "flex-end" }}>
        {data && (
          <Notification
            subscribeToNews={subscribeToNews}
            notifications={data.notifications}
          />
        )}
      </MDBCol>
    </header>
  );
}
