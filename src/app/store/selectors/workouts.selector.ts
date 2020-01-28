import { selectWorkoutsState } from '../reducers';
import { WorkoutsState } from '../models/workouts.model';
import { createSelector } from '@ngrx/store';
import * as fromWorkouts from '../reducers/workouts.reducer';

export const selectWorkouts = createSelector(
  selectWorkoutsState,
  (state: WorkoutsState) => state
);

export const areWorkoutsLoaded = createSelector(
  selectWorkoutsState,
  (state: WorkoutsState) => state.loaded
);

export const selectAllWorkouts = createSelector(
  selectWorkoutsState,
  fromWorkouts.selectAll
);
