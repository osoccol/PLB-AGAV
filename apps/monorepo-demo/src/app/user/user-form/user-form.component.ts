import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  user?: User;
  form: FormGroup;

  constructor(private userService: UserService) {
    this.form = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    })
    console.log('Composant formulaire construit !');
  }

  submit() {
    this.user = {
      id: 0,
      firstName: this.form.value.firstname,
      lastName: this.form.value.lastname,
      email: this.form.value.email,
      phone: this.form.value.phone,
    };
    this.userService.addUser(this.user);
  }
}
