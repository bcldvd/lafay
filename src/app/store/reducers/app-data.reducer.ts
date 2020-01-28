import { fromAppData } from '../actions';
import { AppDataState } from '../models/app-data.model';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: AppDataState = {
  pathOfDb: null,
  title: null,
  id: null,
  loaded: false
};

const reducer = createReducer(
  initialState,
  on(fromAppData.getAppDataSuccess, (state, action) => ({
    ...state,
    ...action.appData,
    loaded: true
  })),
  on(fromAppData.deleteAppDataSuccess, () => initialState)
);

export function appDataReducer(
  state: AppDataState | undefined,
  action: Action
) {
  return reducer(state, action);
}
