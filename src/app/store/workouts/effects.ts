import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
  withLatestFrom,
  flatMap
} from 'rxjs/operators';
import { WorkoutsActionTypes, GetWorkoutsSuccess } from './actions';
import { DriveService } from 'src/app/home/drive.service';
import { Store, select } from '@ngrx/store';
import { GetAppData } from '../app-data/actions';

@Injectable()
export class WorkoutsEffects {
  constructor(
    private actions$: Actions,
    private driveService: DriveService,
    private store: Store<any>
  ) {}

  @Effect()
  getWorkouts$ = this.actions$.pipe(
    ofType(WorkoutsActionTypes.Get),
    withLatestFrom(this.store.pipe(select('appData'))),
    flatMap(([_, appData]) => {
      if (Object.keys(appData).length === 0) {
        return of(new GetAppData());
      } else {
        return this.driveService
          .getSheet(appData.id)
          .pipe(map(data => new GetWorkoutsSuccess(data)));
      }
    })
  );
}
