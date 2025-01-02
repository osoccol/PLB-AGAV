import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
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
}
