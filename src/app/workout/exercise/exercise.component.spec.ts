import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExerciseComponent } from './exercise.component';
import { WorkoutCountdownComponent } from '../countdown/countdown.component';
import { CountdownModule } from 'ngx-countdown';
import { InputPlusMinusComponent } from './input-plus-minus/input-plus-minus.component';

const MOCK_EXERCISE = {
  exerciseId: 0,
  reps: 2,
  rounds: 1,
  rest: 1
};

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExerciseComponent,
        WorkoutCountdownComponent,
        InputPlusMinusComponent
      ],
      imports: [IonicModule.forRoot(), CountdownModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    component.exercise = MOCK_EXERCISE;
    component.exerciseValue = null;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when exercise is finished', () => {
    component.exerciseFinished.subscribe(value => {
      expect(value).toBe(true);
    });
    component.triggerExerciseFinished();
  });

  it('should change exercise value when triggered', () => {
    component.exerciseValueChanged(5);
    expect(component.exerciseValue).toBe(5);
  });

  it('should emit when rest is finished', () => {
    component.restFinished.subscribe(value => {
      expect(value).toBe(null);
    });
    component.triggerRestFinished();
  });
});
