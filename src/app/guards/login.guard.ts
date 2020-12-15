import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(public firebaseAuthService: FirebaseAuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.firebaseAuthService.getUser()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}