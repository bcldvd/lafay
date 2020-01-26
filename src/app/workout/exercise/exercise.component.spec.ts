import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExerciseComponent } from './exercise.component';
import { WorkoutCountdownComponent } from '../countdown/countdown.component';
import { CountdownModule } from 'ngx-countdown';

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
      declarations: [ExerciseComponent, WorkoutCountdownComponent],
      imports: [IonicModule.forRoot(), CountdownModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    component.exercise = MOCK_EXERCISE;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
