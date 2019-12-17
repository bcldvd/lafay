import {
  GetWorkouts,
  WorkoutsActionTypes,
  GetWorkoutsSuccess
} from './actions';

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
        const payload = [
          {
            name: 'C3'
          }
        ];
        const action = new GetWorkoutsSuccess(payload);

        expect({ ...action }).toEqual({
          type: WorkoutsActionTypes.GetSuccess,
          payload
        });
      });
    });
  });
});
