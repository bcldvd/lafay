import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AUTH_SERVER = 'http://localhost:3000';
  ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

  constructor(private storage: Storage, private jwtHelper: JwtHelperService) {}

  login() {
    window.location.href = `${this.AUTH_SERVER}/auth/google`;
  }

  async setJwt(jwt: string) {
    await this.storage.set(this.ACCESS_TOKEN_KEY, jwt);
  }

  async getJwt() {
    return await this.storage.get(this.ACCESS_TOKEN_KEY);
  }

  async isAuthenticated() {
    const jwt = await this.getJwt();
    return !this.jwtHelper.isTokenExpired(jwt);
  }
}
