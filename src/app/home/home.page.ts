import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DriveService } from './drive.service';
import { mergeMap, map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { GetAppData } from '../store/app-data/actions';
import { GetWorkouts } from '../store/workouts/actions';
import { Workout } from '../store/workouts/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  config$ = new Subject();
  workouts$: Observable<Workout[]>;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.workouts$ = this.store.pipe(
      select('workouts'),
      map(data => data.workouts)
    );
    this.store.dispatch(new GetWorkouts());
  }

  newWorkout() {
    this.router.navigate(['workout']);
  }
}
