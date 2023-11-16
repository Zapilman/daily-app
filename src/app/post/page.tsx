import React from 'react';

const getData = async () => {
  const response = await fetch(
    'https://5f63-93-171-78-235.ngrok-free.app/api/post',
  );

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
