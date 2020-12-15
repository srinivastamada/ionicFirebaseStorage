import { FirebaseAuthService } from './../services/firebase-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public firebaseAuthService: FirebaseAuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.firebaseAuthService.getUser()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}