import { fromWorkouts } from '../actions';
import { mockWorkout } from '../models/workouts.model';
import { workoutsReducer, initialState } from './workouts.reducer';

describe('Workout reducer', () => {
  it('should get getWorkoutsSuccess', () => {
    const action = fromWorkouts.getWorkoutsSuccess({ workouts: mockWorkout });
    const result = workoutsReducer(initialState, action);
    expect(result.loaded).toBe(true);
  });
});
