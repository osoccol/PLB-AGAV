import { createAction } from "@ngrx/store";
import { User } from "../user/user.component";

export const addUser = createAction('[User] Add User', (user: User) => ({
    user,
}));