import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appSelector, AppState } from '../store/app.reducer';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  state?: AppState;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.setState();
  }

  setState() {
    this.store.select(appSelector).pipe(
      map((x:any) => {
        this.state = x.state;
      })
    ).subscribe();
  }
}
