import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CanComponentDeactivate } from '../guards/exit.guard';
import { ActivatedRoute, Router } from '@angular/router';

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
export class UserComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  private userSubscription$ = new Subject<void>();
  users: User[] = [];

  @ViewChild('formContainer', { read: ViewContainerRef })
  formContainer!: ViewContainerRef;

  constructor(private cdr: ChangeDetectorRef,
    private userService: UserService,
    private router: Router, 
    private route: ActivatedRoute) {
    }

  ngOnInit(): void {
    // this.loadUsers();

    this.route.data.subscribe(data => {
      this.users = data['users'];
    });


    // this.loadUsersFromObservable();
  }

  canDeactivate (): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Voulez-vous quitter cette page ?');
  };

  goToLogin() {
    this.router.navigate(['/login']);
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

  add(a: number, b: number) {
    return a + b;
  }

  product(numbers: number[]) {
    return numbers.reduce((prod, number) => prod * number, 1);
  }

  ngOnDestroy(): void {
      this.userSubscription$.next();
      this.userSubscription$.complete();
  }

}
