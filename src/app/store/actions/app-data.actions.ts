import { createAction, props } from '@ngrx/store';
import { ConfigFile } from '../models/app-data.model';

export const saveAppData = createAction(
  '[AppData] Save',
  props<{ appData: ConfigFile }>()
);

export const saveAppDataSuccess = createAction('[AppData] Save sucess');

export const getAppData = createAction('[AppData] Load appData from server');

export const getAppDataSuccess = createAction(
  '[AppData] Load success',
  props<{ appData: ConfigFile }>()
);

export const deleteAppData = createAction('[AppData] Delete');

export const deleteAppDataSuccess = createAction('[AppData] Delete success');
