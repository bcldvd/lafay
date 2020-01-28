import { appDataReducer } from './app-data.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../models';
import { AppDataState } from '../models/app-data.model';
import { WorkoutsState } from '../models/workouts.model';
import { workoutsReducer } from './workouts.reducer';

export const reducers: ActionReducerMap<AppState> = {
  appData: appDataReducer,
  workouts: workoutsReducer
};

export const selectAppDataState = createFeatureSelector<AppState, AppDataState>(
  'appData'
);

export const selectWorkoutsState = createFeatureSelector<
  AppState,
  WorkoutsState
>('workouts');
