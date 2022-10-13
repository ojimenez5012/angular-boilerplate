import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  user: reducers.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  user: reducers.userReducer,
};
