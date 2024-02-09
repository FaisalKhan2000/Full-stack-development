import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [updatedPost, setUpdatedPost] = useState({
    id: null,
    title: "",
    body: "",
  });

  // GET posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  // POST a new post
  const handleCreatePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!newPost.title || !newPost.body) return;
        setPosts([...posts, data]);
        setNewPost({ title: "", body: "" });
      });
  };

  // PUT (Update) a post
  const handleUpdatePost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedPost),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(posts.map((post) => (post.id === data.id ? data : post)));
        setUpdatedPost({ id: null, title: "", body: "" });
      });
  };

  // DELETE a post
  const handleDeletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="form-container">
        <h2>Create Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button onClick={handleCreatePost}>Create</button>

        {updatedPost.id && (
          <>
            <h2>Update Post</h2>
            <input
              type="text"
              placeholder="Title"
              value={updatedPost.title}
              onChange={(e) =>
                setUpdatedPost({ ...updatedPost, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Body"
              value={updatedPost.body}
              onChange={(e) =>
                setUpdatedPost({ ...updatedPost, body: e.target.value })
              }
            />
            <button onClick={handleUpdatePost}>Update</button>
          </>
        )}
      </div>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <div className="btn-group">
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              <button onClick={() => setUpdatedPost(post)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
