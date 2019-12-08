import React, { useState } from "react";
import CardCategories from "../Cards/CardCategory";
import HeaderSearch from "./HeaderSearch";
import CardPosts from "../Cards/CardPost";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_SEARCH_POST } from "../../helpers/graphql/querys/querys";

import Pagination from "../pagination";
export default function Conversations({
  options,
  categories,
  changePost,
  postId,
  closeSideBar
}) {
  const [categoriesSelected, setCatetories] = useState([]);
  const [search, setSearch] = useState("");
  const handlingChange = e => {
    if (e === null) setCatetories([]);
    else setCatetories(e);
  };
  const handlingSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const { data, loading, error } = useQuery(QUERY_SEARCH_POST, {
    variables: {
      first: 10,
      after: 0,
      word: search,
      categories: categoriesSelected.map(e => e.value)
    }
  });

  const Posts = ({ posts }) =>
    posts.map(post => (
      <CardPosts
        {...post}
        key={post._id}
        changePost={changePost}
        postId={postId}
        closeSideBar={closeSideBar}
      />
    ));

  return (
    <section
      className={
        options === 1 ? "categories active scroll" : "categories scroll"
      }
    >
      <HeaderSearch
        categories={categories}
        search={search}
        categoriesSelected={categoriesSelected}
        handlingChange={handlingChange}
        handlingSearch={handlingSearch}
      />
      <div id="posts" className="posts">
        {data && <Posts posts={data.searchPost} />}
      </div>
    </section>
  );
}
