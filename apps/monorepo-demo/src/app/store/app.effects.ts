import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { addUser } from './app.actions';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);

  logUserActions$ = createEffect(
    () => this.actions$.pipe(
      ofType(addUser),
      tap(action => {
        console.log('Utilisateur ajouté :', action.user);
      })
    ),
    { dispatch: false }
  );

}
