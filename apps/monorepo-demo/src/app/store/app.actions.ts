import { createAction } from "@ngrx/store";
import { User } from "../user/user.component";

export const addUser = createAction('[User] Add User', (user: User) => ({ user }));

export const incrementCounter = createAction('[Counter] Add 1 to Counter');
export const decrementCounter = createAction('[Counter] Remove 1 to Counter');
export const resetCounter = createAction('[Counter] Reset Counter');

export const doNothing = createAction('-------------', x => ({ x }));