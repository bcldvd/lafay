import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Workout, WorkoutsState } from '../models/workouts.model';
import { createReducer, on, Action } from '@ngrx/store';
import { fromWorkouts } from '../actions';

// import { ActionsUnion, WorkoutsActionTypes } from '../actions/workouts.actions';

export const adapter: EntityAdapter<Workout> = createEntityAdapter<Workout>({});

export const initialState: WorkoutsState = adapter.getInitialState({
  loaded: false
});

const reducer = createReducer(
  initialState,
  on(fromWorkouts.getWorkoutsSuccess, (state, action) =>
    adapter.addAll(action.workouts, {
      ...state,
      loaded: true
    })
  )
);

export function workoutsReducer(
  state: WorkoutsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

export const { selectAll } = adapter.getSelectors();
