import { Metadata } from 'next';
import React from 'react';
import { PostInfo } from '@/_ui/src/components/PostInfo';
import { TPost } from '../../../_store/API/entities/Post/post.types';
import API from '_store/API';
import { log } from 'console';
import { Posts } from '_modules/post/Posts';

const getData = async () => {
  const posts = await API.Post.getAllPost({
    next: {
      revalidate: 1,
    },
  });

  return posts;
};

export const generateMetadata = async (): Promise<Metadata> => {
  const posts = await getData();
  return {
    title: posts.length + 'posts',
  };
};

const page = async () => {
  const posts = await getData();
  return <Posts posts={posts} />;
};

export default page;
