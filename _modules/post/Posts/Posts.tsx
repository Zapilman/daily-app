import { PostInfo } from '@/_ui/src/components/PostInfo';
import API from '_store/API';
import { TPost } from '_store/API/entities/Post/post.types';
import React from 'react';
import styles from './posts.module.css';
import Link from 'next/link';
type TPostsProps = {
  posts: TPost[];
};
const Posts = ({ posts }: TPostsProps) => {
  return (
    <div className={styles.page}>
      {posts.map((post) => {
        return (
          <Link key={post._id} href={`/post/${post._id}`}>
            <PostInfo
              imageUrl={post.mainPhoto && API.Static.get(post.mainPhoto.url)}
              tags={post.tags}
              title={post.title}
              previewText={post.text}
              datePublish={post.createdAt}
              readMinutes={post.minutesToRead}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
