import { AppDataState } from './app-data.model';
import { WorkoutsState } from './workouts.model';

export interface AppState {
  appData: AppDataState;
  workouts: WorkoutsState;
}
