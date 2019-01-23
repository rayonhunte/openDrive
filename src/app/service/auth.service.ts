import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async EmailLogin(email: string, password: string) {
    return await this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(
      (err) => {
        throw(err);
      }
    ).then(
      (credential) => credential.user
    );
  }

  async getToken() {
    return await this.afAuth.auth.currentUser.getIdToken();
  }


}
