import { UserState } from '@core/interfaces';
import { createReducer, on } from '@ngrx/store';
import { loadUser } from '../actions';

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
