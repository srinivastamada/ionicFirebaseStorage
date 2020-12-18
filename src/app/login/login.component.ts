import { FirebaseAuthService } from './../services/firebase-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public firebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {}

}
