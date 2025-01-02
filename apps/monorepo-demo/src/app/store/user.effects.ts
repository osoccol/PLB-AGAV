import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { addUser } from './user.actions';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions) {
        this.actions$.pipe(
            ofType(addUser),
            tap(action => {
                console.log('Action capturée par l\'effet Logger :', action);
            })
        ).subscribe();        
    }

    // logUserActions$ = createEffect(
    //     () => this.actions$.pipe(
    //       ofType(addUser),
    //       tap(action => {
    //         console.log('Utilisateur ajouté :', action.user);
    //       })
    //     ),
    //     { dispatch: false }
    //   );
      
}
