import React, { useContext } from "react";
import CardPost from "./../Cards/CardPost";
import AuthContext from "../../helpers/context/auth-context";
export default function Conversations({
  options,
  changePost,
  postId,
  closeSideBar
}) {
  const { posts } = useContext(AuthContext);
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
