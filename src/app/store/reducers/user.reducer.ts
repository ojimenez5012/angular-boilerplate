import { createReducer, on } from '@ngrx/store';
import { loadUser } from '../actions';

export interface UserState {
  id: string | null;
  user: string | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const UserInitialState: UserState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _UserReducer = createReducer(
  UserInitialState,
  on(
    loadUser,
    (state, { id }): UserState => ({
      ...state,
      loading: true,
      id: id,
    })
  )
);

export function userReducer(state: any, action: any) {
  return _UserReducer(state, action);
}
