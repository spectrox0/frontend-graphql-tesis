import React, { useContext } from "react";
import CardPost from "./../Cards/CardPost";
import { useSelector, useDispatch } from "react-redux";
export default function Conversations({ options, changePost, postId }) {
  const { posts } = useSelector(state => ({
    ...state.User
  }));
  const dispatch = useDispatch();
  const closeSideBar = () => {
    dispatch({
      type: "CLOSE_SIDEBAR"
    });
  };
  const Posts = () => {
    return posts.map(post => (
      <CardPost
        changePost={changePost}
        postId={postId}
        key={post._id}
        closeSideBar={closeSideBar}
        {...post}
      />
    ));
  };
  return (
    <section className={options === 0 ? "chats active scroll" : "chats scroll"}>
      {posts && <Posts />}
    </section>
  );
}
