
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { firebase } from '@firebase/app';
import '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(private angularFireAuth: AngularFireAuth, public router: Router) {}

  firebaseSocialLogin(provider) {
    this.angularFireAuth.signInWithPopup(provider).then((res: any) => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['']);
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    console.log(provider);
    return this.firebaseSocialLogin(provider);
  }

  getUser(){
    const userData = localStorage.getItem('user');
    return JSON.parse(userData);
  }

  logout() {
    this.angularFireAuth.signOut();
    localStorage.setItem('user', null);
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
