import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Store } from '@ngrx/store';

const MockStore = {
  dispatch: () => {},
  pipe: () => {}
};

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
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
