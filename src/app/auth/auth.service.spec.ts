import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';

const MockStorageService = {
  get: () => {},
  set: () => {}
};

const MockJwtService = {
  isTokenExpired: () => {
    return false;
  }
};

const baseHref = 'http://localhost';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Storage, useValue: MockStorageService },
        { provide: JwtHelperService, useValue: MockJwtService }
      ]
    });

    delete (global as any).window.location;
    (global as any).window.location = { href: baseHref };

    spyOn(MockStorageService, 'set').and.returnValue(Promise.resolve(true));
    spyOn(MockStorageService, 'get').and.returnValue(Promise.resolve(true));

    spyOn(MockJwtService, 'isTokenExpired');
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should redirect when logging in', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.login();
    expect(window.location.href).not.toBe(baseHref);
  });

  it('should attempt to store jwt', () => {
    const service: AuthService = TestBed.get(AuthService);
    const mockJwt = 'test';
    service.setJwt(mockJwt);
    expect(MockStorageService.set).toHaveBeenCalledWith(
      service.ACCESS_TOKEN_KEY,
      mockJwt
    );
  });

  it('should attempt to get jwt', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.getJwt();
    expect(MockStorageService.get).toHaveBeenCalledWith(
      service.ACCESS_TOKEN_KEY
    );
  });

  describe('isAuthenticated', () => {
    it('should return true in base case scenario', async () => {
      const service: AuthService = TestBed.get(AuthService);
      const isAuthenticated = await service.isAuthenticated();
      expect(isAuthenticated).toBeTruthy();
    });
  });
});
