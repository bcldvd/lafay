import { ActionsUnion, AppDataActionTypes } from './actions';

export const initialState = {};

export function AppDataReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case AppDataActionTypes.GetSuccess:
      return {
        ...state,
        ...action.payload
      };

    case AppDataActionTypes.SaveSuccess:
      return {
        ...state
      };

    case AppDataActionTypes.DeleteSuccess:
      return {};

    default:
      return state;
  }
}
