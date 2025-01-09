import { createReducer, createSelector, on } from "@ngrx/store";
import { addUser } from "./user.actions";
import { User } from "../user/user.component";

export interface UserState {
    users: User[];
    error: string | null;
    isLogged: boolean;
}

const userInitialState: UserState = {
    users: [],
    error: null,
    isLogged: false
}

export const userReducer = createReducer(
    userInitialState,
    on(addUser, (state, { user }) => ({ users: [...state.users, user], error: state.error, isLogged: state.isLogged })),
)

export const usersSelector = createSelector(
    (state: UserState) => state.users,
    (users: User[]) => users
)