import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ExerciseReq } from '../lafay/levels';
import { ExerciseStatus } from '../lafay/lafay.service';

@Component({
  selector: 'lafay-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnChanges {
  @Input() exercise: ExerciseReq;
  @Input() currentRound: number;
  @Input() exerciseStatus: ExerciseStatus;

  @Output() exerciseFinished = new EventEmitter<boolean>();
  @Output() restFinished = new EventEmitter<boolean>();

  rounds: number[];
  ExerciseStatus = ExerciseStatus;

  constructor() {}

  ngOnInit() {
    /* this.rounds = Array(this.exercise.rounds)
      .fill(0)
      .map((x, i) => i + 1); */
  }

  triggerExerciseFinished() {
    this.exerciseFinished.emit(true);
  }

  triggerRestFinished() {
    this.restFinished.emit(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('exercise')) {
      this.rounds = Array(this.exercise.rounds)
        .fill(0)
        .map((x, i) => i + 1);
    }
  }
}
