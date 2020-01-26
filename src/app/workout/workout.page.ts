import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LafayService, ExerciseStatus } from './lafay/lafay.service';
import { Level, ExerciseReq } from './lafay/levels';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss']
})
export class WorkoutPage implements OnInit {
  params: Params;
  currentLevel: Level;
  currentExercise: ExerciseReq;
  currentExerciseIndex: number;
  currentRound: number;
  exerciseStatus: ExerciseStatus;
  workoutDone: boolean;

  constructor(
    private route: ActivatedRoute,
    private lafayService: LafayService
  ) {}

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.currentLevel = this.lafayService.getLevel(0);
    this.currentExercise = this.currentLevel.exercises[0];
    this.currentExerciseIndex = 0;
    this.currentRound = 1;
    this.exerciseStatus = ExerciseStatus.EXERCISE;
  }

  exerciseFinished() {
    this.exerciseStatus = ExerciseStatus.REST;
  }

  restFinished() {
    if (this.currentRound < this.currentExercise.rounds) {
      this.currentRound++;
    } else {
      if (this.currentExerciseIndex + 1 < this.currentLevel.exercises.length) {
        this.currentExerciseIndex++;
        this.currentExercise = this.currentLevel.exercises[
          this.currentExerciseIndex
        ];
        this.currentRound = 1;
      } else {
        this.workoutDone = true;
      }
    }
    this.exerciseStatus = ExerciseStatus.EXERCISE;
  }
}
