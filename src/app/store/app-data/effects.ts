import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, mergeMap } from 'rxjs/operators';
import { AppDataActionTypes, GetAppDataSuccess, ConfigFile } from './actions';
import { DriveService } from 'src/app/home/drive.service';
import { Store } from '@ngrx/store';
import { GetWorkouts } from '../workouts/actions';
import { throwError } from 'rxjs';

@Injectable()
export class AppDataEffects {
  constructor(private actions$: Actions, private driveService: DriveService) {}

  @Effect()
  getAppData$ = this.actions$.pipe(
    ofType(AppDataActionTypes.Get),
    switchMap(() => this.driveService.getAppData()),
    catchError(e => {
      if (e.status === 404) {
        const location = this.driveService.defaultLocation;
        console.log(
          `Creating a config file with sheet location at ${location}`
        );
        return this.driveService
          .postAppData(location)
          .pipe(mergeMap(() => this.driveService.getAppData()));
      } else {
        return throwError(e);
      }
    }),
    switchMap((appData: ConfigFile) => [
      new GetAppDataSuccess(appData),
      new GetWorkouts()
    ])
  );
}
