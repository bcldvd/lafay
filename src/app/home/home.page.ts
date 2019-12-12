import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DriveService } from './drive.service';
import { mergeMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { GetAppData } from '../store/app-data/actions';
import { GetWorkouts, Workout } from '../store/workouts/actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  config$ = new Subject();
  workouts$: Observable<Workout[]>;

  constructor(private driveService: DriveService, private store: Store<any>) {}

  ngOnInit() {
    this.workouts$ = this.store.pipe(select('workouts'));
    this.store.dispatch(new GetWorkouts());
  }

  getAppConfig() {
    const config$ = new Subject();
    this.driveService.getAppData().subscribe(
      data => config$.next(data),
      err => {
        if (err.status === 404) {
          const location = './lafay-db';
          console.log(
            `Creating a config file with sheet location at ${location}`
          );
          this.driveService
            .postAppData(location)
            .pipe(mergeMap(() => this.driveService.getAppData()))
            .subscribe(data => {
              config$.next(data);
            });
        }
      }
    );
    return config$;
  }

  deleteConfig() {
    this.driveService.deleteAppData().subscribe(
      data => console.log(data),
      err => console.error(err)
    );
  }
}
