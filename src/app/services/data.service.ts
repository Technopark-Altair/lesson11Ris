import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users: IUser[] = [];
  constructor() {}

  register(user: IUser) {
    this.users.push(user);
  }

  getUsers(): IUser[] {
    return this.users;
  }

  getUser(email: string): IUser | undefined {
    return this.users.find((user) => user.email === email);
  }
}
