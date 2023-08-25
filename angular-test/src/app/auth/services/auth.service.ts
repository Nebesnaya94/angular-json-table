import { Injectable, signal } from '@angular/core';
import { IUser } from 'src/app/shared/models/user';

@Injectable()
export class AuthService {
  private user!: IUser | null;
  private users!: IUser[];
  isLogged = signal(!!localStorage.getItem('user'));

  signup(user: IUser) {
    this.getSavedUsers();
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(user: IUser) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
    this.isLogged.set(true);
  }

  logout() {
    localStorage.removeItem('user');
    this.isLogged.set(false);
  }

  checkEmail(currentUser: IUser) {
    this.getSavedUsers();
    return this.users.find((user) => user.email == currentUser.email);
  }

  checkPassword(currentUser: IUser) {
    const savedUser = this.checkEmail(currentUser);
    if (!savedUser) return;
    return currentUser.password == savedUser.password;
  }

  checkAuth() {
    return this.isLogged();
  }

  getSavedUsers() {
    const savedUsers = localStorage.getItem('users');
    this.users = savedUsers ? JSON.parse(savedUsers) : [];
  }

  getLoggedUser() {
    const savedUser = localStorage.getItem('user');
    this.user = savedUser ? JSON.parse(savedUser) : null;
    this.isLogged.set(!!savedUser);
    return this.user;
  }
}
