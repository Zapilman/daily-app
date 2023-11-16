import { Metadata } from 'next';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => ({
  title: id,
});

const page = ({ params: { id } }: Props) => {
  return <div>Post {id}</div>;
};

export default page;
