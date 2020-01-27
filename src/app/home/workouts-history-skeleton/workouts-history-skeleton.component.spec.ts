import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkoutsHistorySkeletonComponent } from './workouts-history-skeleton.component';
import { NbToArrayPipe } from 'src/app/pipes/nb-to-array.pipe';

describe('WorkoutsHistorySkeletonComponent', () => {
  let component: WorkoutsHistorySkeletonComponent;
  let fixture: ComponentFixture<WorkoutsHistorySkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutsHistorySkeletonComponent, NbToArrayPipe],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutsHistorySkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
