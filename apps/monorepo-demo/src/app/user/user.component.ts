import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subject, takeUntil } from 'rxjs';

export interface User {
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
export class UserComponent implements OnInit, OnDestroy {
  private userSubscription$ = new Subject<void>();
  users: User[] = [];

  @ViewChild('formContainer', { read: ViewContainerRef })
  formContainer!: ViewContainerRef;

  constructor(private cdr: ChangeDetectorRef, private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
    // this.loadUsersFromObservable();
  }

  loadUsers() {
    this.userService.getUsers().then((users) => {
      this.users = users;
    }).catch(err => console.log(err));
  }

  loadUsersFromObservable() {
    this.userService.getUsersObservable()
      .pipe(takeUntil(this.userSubscription$))
      .subscribe(users => {
        this.users = users;
      })
  }

  async loadUserForm() {
    // Lazy load du composant ou module
    const { UserFormComponent } = await import('./user-form/user-form.component');

    // Crée dynamiquement le composant
    this.formContainer.clear(); // Supprime le contenu précédent
    this.formContainer.createComponent(UserFormComponent);
  }

  updateUser(userId: number, newEmail: string) {
    const user = this.users.find(user => user.id === userId);
    if (user) {
      user.email = newEmail;
      this.cdr.detectChanges(); // Mise à jour manuelle de l'interface
    }
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).then(users => {
      this.users = users;
    });
  }

  trackByUserId(index: number, user: { id: number }) {
    return user.id; // Utilise l'ID unique pour suivre l'élément
  }

  ngOnDestroy(): void {
      this.userSubscription$.next();
      this.userSubscription$.complete();
  }

}
