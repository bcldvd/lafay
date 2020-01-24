import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkoutsHistoryComponent } from './workouts-history.component';
import { TimeAgoPipe } from 'time-ago-pipe';

describe('WorkoutsHistoryComponent', () => {
  let component: WorkoutsHistoryComponent;
  let fixture: ComponentFixture<WorkoutsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutsHistoryComponent, TimeAgoPipe],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
