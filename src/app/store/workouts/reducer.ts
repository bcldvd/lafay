import { ActionsUnion, WorkoutsActionTypes } from './actions';

export const initialState = {
  workouts: []
};

export function WorkoutsReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case WorkoutsActionTypes.GetSuccess:
      return {
        ...state,
        workouts: [...action.payload]
      };

    default:
      return state;
  }
}
