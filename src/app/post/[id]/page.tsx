import { PostInfo } from '@/_ui/src/components/PostInfo';
import API from '_store/API';
import { log } from 'console';
import { Metadata } from 'next';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => {
  const { title } = await API.Post.getPost(id);

  return {
    title,
  };
};

const page = async ({ params: { id } }: Props) => {
  const post = await API.Post.getPost(id);
  return (
    <div>
      <PostInfo
        imageUrl={post.mainPhoto && API.Static.get(post.mainPhoto.url)}
        tags={post.tags}
        title={post.title}
        previewText={post.text}
        datePublish={post.createdAt}
        readMinutes={post.minutesToRead}
      />
    </div>
  );
};

export default page;
