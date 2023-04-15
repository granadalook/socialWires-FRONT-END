import { Iuser } from './User.model';

export interface Ipost {
  id: string;
  title: string;
  texto: string;
  fechaCreacion: Date;
  user: Iuser;
}
