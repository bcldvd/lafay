import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Store } from '@ngrx/store';
import { WorkoutsHistoryComponent } from './workouts-history/workouts-history.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

const MockStore = {
  dispatch: () => {},
  pipe: () => {}
};

const routerSpy = { navigate: jasmine.createSpy('navigate') };

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage, WorkoutsHistoryComponent, TimeAgoPipe],
      imports: [IonicModule, RouterTestingModule],
      providers: [
        { provide: Store, useValue: MockStore },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    spyOn(MockStore, 'dispatch');

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(MockStore.dispatch).toHaveBeenCalled();
  });

  it(`should navigate to workout`, () => {
    component.newWorkout();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['workout']);
  });
});
