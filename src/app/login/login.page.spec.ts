import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { AuthService } from '../auth/auth.service';

const MockLoginService = {
  login: () => {}
};

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule],
      providers: [{ provide: AuthService, useValue: MockLoginService }]
    }).compileComponents();

    spyOn(MockLoginService, 'login');

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService when trying to login', () => {
    component.login();
    expect(MockLoginService.login).toHaveBeenCalled();
  });
});
