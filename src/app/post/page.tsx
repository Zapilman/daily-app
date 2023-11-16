import React from 'react';

const getData = async () => {
  const response = await fetch('http://192.168.0.101:8080/api/post');

  return response.json();
};

const page = async () => {
  const posts = await getData();
  return (
    <div>
      <ul>
        {posts.map((post: any) => {
          return <li key={post._id}>{post._id}</li>;
        })}
      </ul>
    </div>
  );
};

export default page;
