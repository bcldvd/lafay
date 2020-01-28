import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, withLatestFrom, flatMap } from 'rxjs/operators';
import { fromWorkouts, fromAppData } from '../actions';
import { DriveService } from 'src/app/home/drive.service';
import { Store, select } from '@ngrx/store';
import { selectAppData } from '../selectors/app-data.selector';
import { AppState } from '../models';

@Injectable()
export class WorkoutsEffects {
  constructor(
    private actions$: Actions,
    private driveService: DriveService,
    private store: Store<AppState>
  ) {}

  @Effect()
  getWorkouts$ = this.actions$.pipe(
    ofType(fromWorkouts.getWorkouts),
    withLatestFrom(this.store.pipe(select(selectAppData))),
    flatMap(([action, appData]) => {
      if (!appData.loaded) {
        return of(fromAppData.getAppData());
      } else {
        return this.driveService
          .getSheet(appData.id)
          .pipe(map(workouts => fromWorkouts.getWorkoutsSuccess({ workouts })));
      }
    })
  );
}
