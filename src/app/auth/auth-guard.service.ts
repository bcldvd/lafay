import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  async canActivate() {
    const isAuthenticated = await this.auth.isAuthenticated();
    if (!isAuthenticated) {
        this.router.navigate(['login']);
        return false;
    }
    return true;
  }
}
