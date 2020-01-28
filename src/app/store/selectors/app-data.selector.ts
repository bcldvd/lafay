import { createSelector } from '@ngrx/store';
import { AppDataState } from '../models/app-data.model';
import { selectAppDataState } from '../reducers';

export const selectAppData = createSelector(
  selectAppDataState,
  (state: AppDataState) => state
);

export const isAppDataLoaded = createSelector(
  selectAppDataState,
  (state: AppDataState) => state.loaded
);
