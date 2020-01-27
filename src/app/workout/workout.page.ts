import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LafayService, ExerciseStatus } from './lafay/lafay.service';
import { Level, ExerciseReq } from './lafay/levels';
import { Color } from '@ionic/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { NavController } from '@ionic/angular';

export enum WorkoutMood {
  DEAD,
  OK,
  GREAT
}

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss']
})
export class WorkoutPage implements OnInit, AfterViewInit {
  params: Params;
  currentLevel: Level;
  currentExercise: ExerciseReq;
  currentExerciseIndex: number;
  currentRound: number;
  exerciseStatus$ = new Subject<ExerciseStatus>();
  workoutDone$ = new BehaviorSubject<boolean>(false);
  toolbarColor: Color;
  WorkoutMood = WorkoutMood;
  workoutMood: WorkoutMood;
  workoutResults = {};

  constructor(
    private route: ActivatedRoute,
    private lafayService: LafayService,
    private cdr: ChangeDetectorRef,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.currentLevel = this.lafayService.getLevel(0);

    this.currentExerciseIndex = 0;
    this.setCurrentExercise();

    this.exerciseStatus$.subscribe(status => {
      switch (status) {
        case ExerciseStatus.EXERCISE:
          this.toolbarColor = 'warning';
          break;
        case ExerciseStatus.REST:
          this.toolbarColor = 'success';
          break;
      }
    });

    this.workoutDone$.subscribe(done => {
      if (done) {
        this.toolbarColor = 'light';
      }
    });
  }

  ngAfterViewInit() {
    this.exerciseStatus$.next(ExerciseStatus.EXERCISE);
    this.cdr.detectChanges();
  }

  exerciseFinished() {
    this.exerciseStatus$.next(ExerciseStatus.REST);
  }

  restFinished(exerciseValue: number) {
    console.log(
      `You managed to do ${exerciseValue} reps for exercise ${this.currentExercise.name} (round ${this.currentRound})`
    );
    this.workoutResults[this.currentExercise.name].push(exerciseValue);

    if (this.currentRound < this.currentExercise.rounds) {
      this.currentRound++;
      this.exerciseStatus$.next(ExerciseStatus.EXERCISE);
    } else {
      if (this.currentExerciseIndex + 1 < this.currentLevel.exercises.length) {
        this.currentExerciseIndex++;
        this.setCurrentExercise();
        this.exerciseStatus$.next(ExerciseStatus.EXERCISE);
      } else {
        this.workoutDone$.next(true);
      }
    }
  }

  setCurrentExercise() {
    this.currentExercise = this.currentLevel.exercises[
      this.currentExerciseIndex
    ];
    this.currentRound = 1;
    this.workoutResults[this.currentExercise.name] = [];
  }

  setWorkoutMood(mood: WorkoutMood) {
    this.workoutMood = mood;
  }

  save() {
    this.navCtrl.navigateBack('home');
  }
}
