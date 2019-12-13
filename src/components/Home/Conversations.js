import React, { useContext } from "react";
import CardPost from "./../Cards/CardPost";
import { useSelector, useDispatch } from "react-redux";
export default function Conversations({ options }) {
  const { posts, postId } = useSelector(state => ({
    ...state.User,
    ...state.Post
  }));
  const dispatch = useDispatch();
  const closeSideBar = () => {
    dispatch({
      type: "CLOSE_SIDEBAR"
    });
  };
  const changePost = (postId, title, urlImg, creator) => {
    dispatch({
      type: "CHANGE_POST",
      payload: { postId, creator, urlImg, title }
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
