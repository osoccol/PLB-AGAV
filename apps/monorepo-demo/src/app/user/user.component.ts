import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // Données des utilisateurs simulées
  users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '555-1234' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '555-5678' },
    { id: 3, firstName: 'Robert', lastName: 'Johnson', email: 'robert.johnson@example.com', phone: '555-8765' },
    { id: 4, firstName: 'Mary', lastName: 'Williams', email: 'mary.williams@example.com', phone: '555-4321' },
    { id: 5, firstName: 'James', lastName: 'Brown', email: 'james.brown@example.com', phone: '555-6789' },
    { id: 6, firstName: 'Patricia', lastName: 'Jones', email: 'patricia.jones@example.com', phone: '555-3456' },
    { id: 7, firstName: 'Michael', lastName: 'Miller', email: 'michael.miller@example.com', phone: '555-2345' },
    { id: 8, firstName: 'Linda', lastName: 'Davis', email: 'linda.davis@example.com', phone: '555-6781' },
    { id: 9, firstName: 'William', lastName: 'Garcia', email: 'william.garcia@example.com', phone: '555-7890' },
    { id: 10, firstName: 'Elizabeth', lastName: 'Martinez', email: 'elizabeth.martinez@example.com', phone: '555-5671' }
  ];
}
