import { selectAppData, isAppDataLoaded } from './app-data.selector';
import { mockAppData, AppDataState } from '../models/app-data.model';

const appDataState: AppDataState = {
  ...mockAppData,
  loaded: false
};

describe('App data selector', () => {
  it('should select appData', () => {
    expect(selectAppData.projector(appDataState)).toBe(appDataState);
  });

  it('should say if appData is loaded', () => {
    expect(isAppDataLoaded.projector(appDataState)).toBe(false);
  });
});
