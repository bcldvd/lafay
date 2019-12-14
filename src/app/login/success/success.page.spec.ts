import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessPage } from './success.page';
import { ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Component } from '@angular/core';

const params: Params = { jwt: 'jwt' };
const mockActivatedRoute = {
  queryParams: of(params)
} as ActivatedRoute;

const MockAuthService = {
  setJwt: () => {}
};

@Component({ selector: 'blank', template: '' })
class BlankComponent {}

describe('SuccessPage', () => {
  let component: SuccessPage;
  let fixture: ComponentFixture<SuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessPage, BlankComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AuthService, useValue: MockAuthService }
      ],
      imports: [
        IonicModule,
        RouterTestingModule.withRoutes([
          { path: 'home', component: BlankComponent }
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component['router'], 'navigate').and.returnValue(true);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home', () => {
    // expect(component['router'].navigate).toHaveBeenCalledWith('/home');
  });
});
