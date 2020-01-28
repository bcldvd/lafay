import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Store, MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { WorkoutsHistoryComponent } from './workouts-history/workouts-history.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { WorkoutsHistorySkeletonComponent } from './workouts-history-skeleton/workouts-history-skeleton.component';
import { NbToArrayPipe } from '../pipes/nb-to-array.pipe';
import { selectAllWorkouts } from '../store/selectors/workouts.selector';

const routerSpy = { navigate: jasmine.createSpy('navigate') };

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let mockStore: MockStore<any>;
  let mockUsernameSelector: MemoizedSelector<any, any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePage,
        WorkoutsHistoryComponent,
        TimeAgoPipe,
        WorkoutsHistorySkeletonComponent,
        NbToArrayPipe
      ],
      imports: [IonicModule, RouterTestingModule],
      providers: [provideMockStore(), { provide: Router, useValue: routerSpy }]
    }).compileComponents();

    mockStore = TestBed.get(Store);
    mockUsernameSelector = mockStore.overrideSelector(selectAllWorkouts, []);

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should navigate to workout`, () => {
    component.newWorkout();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['workout']);
  });
});
