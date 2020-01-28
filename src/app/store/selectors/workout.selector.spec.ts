import { selectWorkouts, areWorkoutsLoaded } from './workouts.selector';
import { mockWorkout } from '../models/workouts.model';

const mockWorkoutsState = {
  ids: [0],
  entities: {
    0: mockWorkout
  },
  loaded: false
};

describe('Workout selector', () => {
  it('should select all workouts', () => {
    expect(selectWorkouts.projector(mockWorkoutsState)).toBe(mockWorkoutsState);
  });

  it('should return false if workouts are not loaded', () => {
    expect(areWorkoutsLoaded.projector(mockWorkoutsState)).toBe(false);
  });
});
