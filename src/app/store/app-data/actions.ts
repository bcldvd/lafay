import { Action } from '@ngrx/store';

export interface ConfigFile {
  pathOfDb: string;
  title: string;
  id: string;
}

export enum AppDataActionTypes {
  Save = '[AppData] Save',
  SaveSuccess = '[AppData] Save sucess',
  Delete = '[AppData] Delete appData',
  DeleteSuccess = '[AppData] Delete success',
  Get = '[AppData] Load appData from server',
  GetSuccess = '[AppData] Load success'
}

export class SaveAppData implements Action {
  readonly type = AppDataActionTypes.Save;

  constructor(public payload: ConfigFile) {}
}

export class SaveAppDataSuccess implements Action {
  readonly type = AppDataActionTypes.SaveSuccess;
}

export class GetAppData implements Action {
  readonly type = AppDataActionTypes.Get;
}

export class GetAppDataSuccess implements Action {
  readonly type = AppDataActionTypes.GetSuccess;

  constructor(public payload: ConfigFile) {}
}

export class DeleteAppData implements Action {
  readonly type = AppDataActionTypes.Delete;
}

export class DeleteAppDataSuccess implements Action {
  readonly type = AppDataActionTypes.DeleteSuccess;
}

export type ActionsUnion =
  | SaveAppData
  | SaveAppDataSuccess
  | GetAppData
  | GetAppDataSuccess
  | DeleteAppData
  | DeleteAppDataSuccess;
