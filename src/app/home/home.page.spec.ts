import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { DriveService } from './drive.service';
import { Store } from '@ngrx/store';
import { of, throwError } from 'rxjs';

const MockDriveService = {
  getAppData: () => {},
  deleteAppData: () => of(true)
};

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
      providers: [
        { provide: DriveService, useValue: MockDriveService },
        { provide: Store, useValue: MockStore }
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

  describe('delete config', () => {
    it('should work', () => {
      spyOn(console, 'log');
      component.deleteConfig();
      expect(console.log).toHaveBeenCalledWith(true);
    });
  });
});
