import { Ipost } from './post.model';

export interface Iuser {
  id: string;
  userName: string;
  email: string;
  password: string;
  fullName: string;
  creacion: Date;
  posts: Ipost;
}
