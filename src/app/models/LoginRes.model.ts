import { Iuser } from './User.model';

export interface ILoginRest {
  access_token: string;
  user: Iuser;
}
