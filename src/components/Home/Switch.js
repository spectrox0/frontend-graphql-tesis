import React from "react";
import Conversation from "./Conversations";
import Search from "./Search";
import CreatePost from "./CreatePost";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_CATEGORY } from "../../helpers/graphql/querys/querys";

export default function Switch(props) {
  const { data, loading, error } = useQuery(QUERY_CATEGORY);

  return (
    <div className="switch">
      <Conversation {...props} />
      <Search
        {...props}
        categories={
          data &&
          data.__type.enumValues.map(e => {
            return { value: e.name, label: e.description };
          })
        }
      />
      <CreatePost
        {...props}
        categories={
          data &&
          data.__type.enumValues.map(e => {
            return { value: e.name, label: e.description };
          })
        }
      />
    </div>
  );
}
