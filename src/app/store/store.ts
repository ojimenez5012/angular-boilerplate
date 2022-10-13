import { UserState } from '@core/interfaces';
import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './reducers';

export interface AppState {
  user: UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  user: userReducer,
};
