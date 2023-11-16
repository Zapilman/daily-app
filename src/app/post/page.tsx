import { Metadata } from 'next';
import React from 'react';
import { TPost } from '../../../_store/typings/Post';
import { PostInfo } from '@/_ui/src/components/PostInfo';

const getData = async () => {
  const response = await fetch(
    'https://5f63-93-171-78-235.ngrok-free.app/api/post',
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return response.json();
};

export const generateMetadata = async (): Promise<Metadata> => {
  const posts: TPost[] = await getData();
  return {
    title: posts.length + 'posts',
  };
};

const page = async () => {
  const posts: TPost[] = await getData();
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post._id}>
              <PostInfo
                title={post.title}
                content={post.text}
                datePublish={new Date()}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
