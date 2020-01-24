import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Store } from '@ngrx/store';
import { WorkoutsHistoryComponent } from './workouts-history/workouts-history.component';
import { TimeAgoPipe } from 'time-ago-pipe';

const MockStore = {
  dispatch: () => {},
  pipe: () => {}
};

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage, WorkoutsHistoryComponent, TimeAgoPipe],
      imports: [IonicModule],
      providers: [{ provide: Store, useValue: MockStore }]
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
});
