import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user.component';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  user?: User;

  constructor() {
    console.log('Composant formulaire construit !');
  }
}
