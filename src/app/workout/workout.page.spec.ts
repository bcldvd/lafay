import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkoutPage } from './workout.page';
import { CountdownModule } from 'ngx-countdown';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkoutCountdownComponent } from './countdown/countdown.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { InputPlusMinusComponent } from './exercise/input-plus-minus/input-plus-minus.component';
import { ExerciseStatus, LafayService } from './lafay/lafay.service';

class MockLafayService {
  getLevel(id: number) {
    return {
      id: 0,
      name: 'test level',
      exercises: [
        {
          exerciseId: 0,
          reps: -1,
          rounds: 2,
          rest: 1
        },
        {
          exerciseId: 0,
          reps: 5,
          rounds: 1,
          rest: 1
        }
      ]
    };
  }
}

describe('WorkoutPage', () => {
  let component: WorkoutPage;
  let fixture: ComponentFixture<WorkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WorkoutPage,
        ExerciseComponent,
        WorkoutCountdownComponent,
        InputPlusMinusComponent
      ],
      providers: [{ provide: LafayService, useClass: MockLafayService }],
      imports: [IonicModule.forRoot(), CountdownModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutPage);
    component = fixture.componentInstance;
    component.exerciseStatus$.next(null);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set status to rest when exercise is finished', () => {
    component.exerciseStatus$.subscribe(value => {
      expect(value).toBe(ExerciseStatus.REST);
    });
    component.exerciseFinished();
  });

  it('should go to next round', () => {
    component.exerciseStatus$.subscribe(value => {
      expect(value).toBe(ExerciseStatus.EXERCISE);
    });
    component.restFinished(5);
  });

  it('should go to next exercise', () => {
    component.currentRound = 2;
    component.exerciseStatus$.subscribe(value => {
      expect(value).toBe(ExerciseStatus.EXERCISE);
    });
    component.restFinished(5);
    component.restFinished(5);
  });

  it('should finish workout', () => {
    component.currentExercise = component.currentLevel.exercises[1];
    component.workoutDone$.subscribe(value => {
      expect(value).toBe(true);
    });
    component.restFinished(5);
  });
});
