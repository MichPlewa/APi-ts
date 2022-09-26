import { Roles } from '../enums/roles.enum';
import { UserAddres } from './userAddres.interface';

export interface User {
  id?: string;
  name: string;
  email: string;
  birthday: string;
  addres: Array<UserAddres>;
  role: Array<Roles>;
}
