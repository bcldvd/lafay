import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workouts-history-skeleton',
  templateUrl: './workouts-history-skeleton.component.html',
  styleUrls: ['./workouts-history-skeleton.component.scss']
})
export class WorkoutsHistorySkeletonComponent implements OnInit {
  levels = 2;
  sessions = 5;

  constructor() {}

  ngOnInit() {}
}
