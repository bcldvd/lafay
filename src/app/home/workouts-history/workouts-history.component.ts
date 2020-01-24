import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Workout } from 'src/app/store/workouts/model';

@Component({
  selector: 'app-workouts-history',
  templateUrl: './workouts-history.component.html',
  styleUrls: ['./workouts-history.component.scss']
})
export class WorkoutsHistoryComponent implements OnInit {
  @Input() workouts: Workout[];

  constructor() {}

  ngOnInit() {}
}
