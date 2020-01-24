import {
  GetWorkouts,
  WorkoutsActionTypes,
  GetWorkoutsSuccess
} from './actions';
import { mockWorkout } from './model';

describe('Workouts Actions', () => {
  describe('GetWorkouts Actions', () => {
    describe('GetWorkouts', () => {
      it('should create an action', () => {
        const action = new GetWorkouts();

        expect({ ...action }).toEqual({
          type: WorkoutsActionTypes.Get
        });
      });
    });

    describe('GetWorkoutsSuccess', () => {
      it('should create an action', () => {
        const action = new GetWorkoutsSuccess(mockWorkout);

        expect({ ...action }.type).toEqual(WorkoutsActionTypes.GetSuccess);
      });
    });
  });
});
