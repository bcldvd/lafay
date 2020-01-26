import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCountdownComponent } from './countdown.component';
import { CountdownModule } from 'ngx-countdown';

describe('WorkoutCountdownComponent', () => {
  let component: WorkoutCountdownComponent;
  let fixture: ComponentFixture<WorkoutCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CountdownModule],
      declarations: [WorkoutCountdownComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format time', () => {
    expect(component.formatFromTime(70)).toBe('m:ss');
    expect(component.formatFromTime(7)).toBe('s');
  });
});
