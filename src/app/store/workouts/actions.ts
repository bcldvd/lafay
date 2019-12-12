import { Action } from '@ngrx/store';

export interface Workout {
  [key: string]: string;
}

export enum WorkoutsActionTypes {
  Get = '[Workouts] Load workouts from server',
  GetSuccess = '[Workouts] Load success'
}

export class GetWorkouts implements Action {
  readonly type = WorkoutsActionTypes.Get;
}

export class GetWorkoutsSuccess implements Action {
  readonly type = WorkoutsActionTypes.GetSuccess;

  constructor(public payload: Workout[]) {}
}

export type ActionsUnion = GetWorkouts | GetWorkoutsSuccess;
