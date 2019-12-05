import React, { useContext } from "react";
import CardPost from "./../Cards/CardPost";
import AuthContext from "../../helpers/context/auth-context";
export default function Conversations({ options }) {
  const { posts } = useContext(AuthContext);
  const Posts = () => {
    return posts.map(post => <CardPost key={post._id} {...post} />);
  };
  return (
    <section className={options === 0 ? "chats active scroll" : "chats scroll"}>
      {posts && <Posts />}
    </section>
  );
}
