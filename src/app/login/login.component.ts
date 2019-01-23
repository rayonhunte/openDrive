import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from '../state/auth.action';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  curUser: Observable<any>;
  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
    // reactive form object
    this.loginForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]]
    });
  }

  emailLogin(): void {
    const {email, password} = this.loginForm.value;
    this.store.dispatch(new Login(email, password));
  }

}
