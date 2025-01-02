import { createReducer, createSelector, on } from "@ngrx/store";
import { addUser } from "./user.actions";
import { User } from "../user/user.component";

export interface UserState {
    users: User[];
}

const initialState: User[] = [];

export const userReducer = createReducer(
    initialState,
    on(addUser, (state, { user }) => [...state, user]),

)

export const userSelector = createSelector(
    (state: UserState) => state.users,
    (users: User[]) => users
)