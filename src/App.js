import React, { Suspense } from "react";
import { useQuery } from "react-query";
import getUser from "./domains/json-placeholder/services/get-user";
import getPosts from "./domains/json-placeholder/services/get-posts";
import "./styles.css";

const UserPosts = ({ userId }) => {
  const { data: posts = [] } = useQuery([userId, "posts"], getPosts);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

const UserProfile = ({ userId }) => {
  const { data: user = null } = useQuery([userId, "profile"], getUser);

  return (
    <>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <Suspense fallback={<div>Loading posts...</div>}>
        <UserPosts userId={userId} />
      </Suspense>
    </>
  );
};

const App = () => (
  <div className="App">
    <Suspense fallback={<div>Loading profile...</div>}>
      <UserProfile userId={2} />
    </Suspense>
  </div>
);

export default App;
