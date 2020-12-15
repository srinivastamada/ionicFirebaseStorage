import { FirebaseAuthService } from './../services/firebase-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  userProfileData: any;
  constructor(private firebaseAuthService: FirebaseAuthService) {}
  ngOnInit(){
   this.userProfileData = this.firebaseAuthService.getUser();
   console.log(this.userProfileData);
  }

  logoutAction(){
   this.firebaseAuthService.logout();
  }

}
