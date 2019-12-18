import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';
import { of } from 'rxjs';
import { DriveService } from '../home/drive.service';
import { AuthService } from '../auth/auth.service';

const MockDriveService = {
  getAppData: () => {},
  deleteAppData: () => of(true)
};

const MockAuthService = {
  logout: () => {}
};

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [IonicModule],
      providers: [
        { provide: DriveService, useValue: MockDriveService },
        { provide: AuthService, useValue: MockAuthService }
      ]
    }).compileComponents();

    spyOn(MockAuthService, 'logout');

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('delete config', () => {
    it('should work', () => {
      spyOn(console, 'log');
      component.deleteConfig();
      expect(console.log).toHaveBeenCalledWith(true);
    });
  });

  describe('logout', () => {
    it('should call auth service', () => {
      component.logout();
      expect(MockAuthService.logout).toHaveBeenCalled();
    });
  });
});
