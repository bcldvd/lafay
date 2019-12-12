import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { AppDataActionTypes, GetAppDataSuccess, ConfigFile } from './actions';
import { DriveService } from 'src/app/home/drive.service';
import { Store } from '@ngrx/store';
import { GetWorkouts } from '../workouts/actions';

@Injectable()
export class AppDataEffects {
  constructor(private actions$: Actions, private driveService: DriveService) {}

  @Effect()
  getAppData$ = this.actions$.pipe(
    ofType(AppDataActionTypes.Get),
    switchMap(() => this.driveService.getAppData()),
    switchMap((appData: ConfigFile) => [
      new GetAppDataSuccess(appData),
      new GetWorkouts()
    ])
  );
}
