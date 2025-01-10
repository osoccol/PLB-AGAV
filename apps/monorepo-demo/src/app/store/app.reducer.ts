import { createReducer, createSelector, on } from "@ngrx/store";
import { addUser, decrementCounter, doNothing, incrementCounter, resetCounter } from "./app.actions";
import { User } from "../user/user.component";

export interface AppState {
    users: User[];
    counter: number;
    id: number;
    age: number;
}

const initialState: AppState = {
    users: [],
    counter: 0,
    id: 0,
    age: 0,
};

export const appReducer = createReducer(
    initialState,
    on(addUser, (state, { user }) => ({ ...state, users: [...state.users, user] })),
    on(incrementCounter, (state) => ({ ...state, counter: state.counter + 1 })),
    on(decrementCounter, (state) => ({ ...state, counter: state.counter - 1 })),
    on(resetCounter, (state) => ({ ...state, counter: 0, age: 10 })),
    on(doNothing, (state, { x }) => ({ ...state, id: x })),
);

export const appSelector = createSelector(
    (state: AppState) => state,
    state => state
);