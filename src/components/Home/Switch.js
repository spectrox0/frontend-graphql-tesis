import React from "react";
import Conversation from "./Conversations";
import Categories from "./Categories";
import CreatePost from "./CreatePost";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_CATEGORY } from "../../helpers/graphql/querys/querys";

export default function Switch(props) {
  const { data, loading, error } = useQuery(QUERY_CATEGORY);

  return (
    <div className="scrollbar" id="style-2">
      <div className="switch">
        <Conversation {...props} />
        <Categories {...props} categories={data && data.__type.enumValues} />
        <CreatePost {...props} categories={data && data.__type.enumValues} />
      </div>
    </div>
  );
}
