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

  deleteConfig() {
    this.driveService.deleteAppData().subscribe(
      data => console.log(data),
      err => console.error(err)
    );
  }
}
