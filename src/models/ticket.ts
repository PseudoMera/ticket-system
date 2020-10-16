import { Comment } from './comment';

export type Ticket = {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  userId: number;
  comments: Comment[];
};
