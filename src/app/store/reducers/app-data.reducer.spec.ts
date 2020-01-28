import { mockAppData, AppDataState } from '../models/app-data.model';
import { fromAppData } from '../actions';
import { appDataReducer, initialState } from './app-data.reducer';

describe('App data reducer', () => {
  it('should get appDataSuccess', () => {
    const action = fromAppData.getAppDataSuccess({ appData: mockAppData });
    const result = appDataReducer(initialState, action);
    expect(result.loaded).toBe(true);
    expect(result.id).toBe(mockAppData.id);
  });

  it('should delete appData', () => {
    const state = {
      ...initialState,
      mockAppData,
      loaded: true
    };
    const action = fromAppData.deleteAppDataSuccess();
    const result = appDataReducer(state, action);
    expect(result).toBe(initialState);
  });
});
