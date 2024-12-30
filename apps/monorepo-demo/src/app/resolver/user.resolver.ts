import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User[]> {
  constructor(private userService: UserService) { }

  resolve(): User[] {
    return this.userService.getInstantUsers();
  }
}
