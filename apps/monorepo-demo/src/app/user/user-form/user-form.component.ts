import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user.component';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/user.reducer';
import { addUser } from '../../store/user.actions';

export function phoneValidator(control: AbstractControl) {
  const regex = /^[0-9]{10}$/;
  return regex.test(control.value) ? null : { invalidPhone: true };
}

export function emailExistsValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    let val = control.value;
    return new Promise((resolve) => {
      if (userService.hasEmail(val)) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    });
  };
}

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  user?: User;
  form: FormGroup;

  constructor(private userService: UserService, private store: Store<UserState>) {
    this.form = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email], [emailExistsValidator(this.userService)]),
      phone: new FormControl('', [Validators.required, phoneValidator]),
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
    this.store.dispatch(addUser(this.user));
  }
}
