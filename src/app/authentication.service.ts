import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  createUser(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(user => {
      user.sendEmailVerification();
    });
  }

  loginWithEmail(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
