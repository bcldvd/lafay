import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkoutPage } from './workout.page';
import { CountdownModule } from 'ngx-countdown';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkoutCountdownComponent } from './countdown/countdown.component';
import { ExerciseComponent } from './exercise/exercise.component';

describe('WorkoutPage', () => {
  let component: WorkoutPage;
  let fixture: ComponentFixture<WorkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutPage, ExerciseComponent, WorkoutCountdownComponent],
      imports: [IonicModule.forRoot(), CountdownModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
