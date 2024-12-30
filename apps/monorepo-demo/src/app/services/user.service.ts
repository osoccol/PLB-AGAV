import { Injectable } from '@angular/core';
import { User } from '../user/user.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    { id: 101, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '555-1234' },
    { id: 102, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '555-5678' },
    { id: 103, firstName: 'Robert', lastName: 'Johnson', email: 'robert.johnson@example.com', phone: '555-8765' },
    { id: 104, firstName: 'Mary', lastName: 'Williams', email: 'mary.williams@example.com', phone: '555-4321' },
    { id: 105, firstName: 'James', lastName: 'Brown', email: 'james.brown@example.com', phone: '555-6789' },
    { id: 106, firstName: 'Patricia', lastName: 'Jones', email: 'patricia.jones@example.com', phone: '555-3456' },
    { id: 107, firstName: 'Michael', lastName: 'Miller', email: 'michael.miller@example.com', phone: '555-2345' },
    { id: 108, firstName: 'Linda', lastName: 'Davis', email: 'linda.davis@example.com', phone: '555-6781' },
    { id: 109, firstName: 'William', lastName: 'Garcia', email: 'william.garcia@example.com', phone: '555-7890' },
    { id: 110, firstName: 'Elizabeth', lastName: 'Martinez', email: 'elizabeth.martinez@example.com', phone: '555-5671' }
  ];

  constructor() { }

  isLoggedIn() {
    return true;
  }

  getUsers(rejection?: boolean): Promise<User[]> {
    return new Promise((resolve, reject) => {
      if (rejection) reject('Forced Rejection !');
      setTimeout(() => {
        resolve(this.users);
      }, 4000)
    });
  }

  getUsersObservable(): Observable<User[]> {
    return of(this.users);
  }

  getInstantUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    let maxId = this.users.map(el => el.id).sort((a,b) => b - a)[0];
    user.id = maxId + 1;
    this.users.push(user);    
  }

  deleteUser(user: User): Promise<User[]> {
    return new Promise((resolve) => {
      let userId = user.id;
      this.users = this.users.filter(user => user.id != userId);
      resolve(this.users);
    });    
  }
}
