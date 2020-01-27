import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';
import { of, Observable, throwError } from 'rxjs';
import { DriveService } from '../home/drive.service';
import { AuthService } from '../auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

class MockDriveService {
  throwErrors: false;

  getAppData() {}

  deleteAppData() {
    return this.throwErrors ? throwError(null) : of(true);
  }
}

const MockAuthService = {
  logout: () => {}
};

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [IonicModule, RouterTestingModule],
      providers: [
        { provide: DriveService, useClass: MockDriveService },
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

    it('should catch potential errors', () => {
      const driveService = TestBed.get(DriveService);
      driveService.throwErrors = true;

      spyOn(console, 'error');

      component.deleteConfig();

      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('should call auth service', () => {
      component.logout();
      expect(MockAuthService.logout).toHaveBeenCalled();
    });
  });
});
