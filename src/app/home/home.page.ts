import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { fromWorkouts } from '../store/actions';
import { Workout, WorkoutsState } from '../store/models/workouts.model';
import { Router } from '@angular/router';
import { selectAllWorkouts } from '../store/selectors/workouts.selector';
import { AppState } from '../store/models';
import { DriveService } from './drive.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  config$ = new Subject();
  workouts$: Observable<Workout[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private driveService: DriveService
  ) {}

  ngOnInit() {
    /* this.workouts$ = this.store.pipe(select(selectAllWorkouts));
    this.store.dispatch(fromWorkouts.getWorkouts()); */
    this.driveService
      .saveSheet('1MtfGpMRxnWrUkICACrqmvHbWd2jeUxDW0Nbd8kU2v4I')
      .subscribe(data => {
        console.log(data);
      });
  }

  newWorkout() {
    this.router.navigate(['workout']);
  }
}
