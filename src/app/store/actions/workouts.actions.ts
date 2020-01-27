import { createAction, props } from '@ngrx/store';
import { Workout } from '../models/workouts.model';

export const getWorkouts = createAction('[Workouts] Load workouts from server');

export const getWorkoutsSuccess = createAction(
  '[Workouts] Load workouts from server success',
  props<{ workouts: Workout[] }>()
);
