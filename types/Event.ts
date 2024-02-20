export type EventType = {
  id?: string;
  title: string;
  description: string;
  location: string;
  availability: string;
  slug: string;
  image: string;
  date: Date;
  createdAt?: Date;
  updatedAt: Date;
  ownerId: string;
};
