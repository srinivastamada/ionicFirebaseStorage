import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../services/firebase-auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  userProfileData: any;
  constructor(private firebaseAuthService: FirebaseAuthService) {}
  ngOnInit() {
    this.userProfileData = this.firebaseAuthService.getUser();
  }

  logoutAction() {
    this.firebaseAuthService.logout();
  }
}
