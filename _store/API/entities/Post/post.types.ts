export type TPost = {
  _id: string;
  title: string;

  mainPhoto?: {
    url: string;

    name: string;
  };

  text: string;
  preText: string;
  minutesToRead: number;

  tags: string[];

  createdAt: string;
};
