import { UsersRepository } from './user-repository.interface';
import { User } from '../interfaces/user.interface';
import shortid from 'shortid';
import { Roles } from '../enums/roles.enum';

export class UsersMockRepository implements UsersRepository {
  private users: Array<User> = [];
  addItem(item: User): User {
    item.id = shortid.generate();
    item.role = item.role;
    this.users.push(item);
    return item;
  }
  updateItem(id: string, item: User): User {
    this.users = this.users.map((i) => {
      if (i.id === id) {
        return {
          ...item,
          id: i.id,
          role: i.role,
          updatedAt: new Date(),
        };
      }
      return i;
    });
    return this.getItemById(id);
  }
  deleteItem(id: string): boolean {
    this.users = this.users.filter((i) => i.id !== id);
    return true;
  }
  getItemById(id: string): User {
    return this.users.find((i) => i.id === id) as User;
  }
  getAllItems(): Array<User> {
    return this.users;
  }
  getItemByRole(role: Array<Roles>): User {
    return this.users.find((i) => i.role === role) as User;
  }
  findUserByFirstName(name: string): User {
    return this.users.find((i) => i.name === name) as User;
  }
}
