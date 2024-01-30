import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Post ID: {id}</h2>
      {/* Fetch and display post details based on id */}
      {/* For simplicity, let's just display the post content here */}
      <p>This is the content of post {id}.</p>
    </div>
  );
};

export default Post;
