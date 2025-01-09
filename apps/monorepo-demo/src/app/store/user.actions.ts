import { createAction } from "@ngrx/store";
import { User } from "../user/user.component";

export const addUser = createAction('[User] Add User', (user: User) => ({
    user,
}));

// export const getUsers = createAction('[User] Get All Users');

// export const getUsersSuccess = createAction('[User] Get All Users - Success', )

// export const addUserSuccess = createAction('[User] Add User - Success');