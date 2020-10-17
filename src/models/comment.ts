import { User } from './user';

export type Comment = {
  id: number;
  body: string;
  createdAt: string;
  ticketId: number;
  userId: number;
  user: User;
};
