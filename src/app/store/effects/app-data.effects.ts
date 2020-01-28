import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, mergeMap } from 'rxjs/operators';
import { fromWorkouts, fromAppData } from '../actions';
import { DriveService } from 'src/app/home/drive.service';
import { throwError } from 'rxjs';
import { ConfigFile } from '../models/app-data.model';

@Injectable()
export class AppDataEffects {
  constructor(private actions$: Actions, private driveService: DriveService) {}

  @Effect()
  getAppData$ = this.actions$.pipe(
    ofType(fromAppData.getAppData),
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
      fromAppData.getAppDataSuccess({ appData }),
      fromWorkouts.getWorkouts()
    ])
  );
}
