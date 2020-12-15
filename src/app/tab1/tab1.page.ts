import { FirebaseAuthService } from './../services/firebase-auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private firebaseAuthService: FirebaseAuthService) {}

  logoutAction(){
   this.firebaseAuthService.logout();
  }

}
