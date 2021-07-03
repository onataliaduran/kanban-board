import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import auth from 'firebase/app';
import { defer, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  register(email: string, password: string) {
    return defer(() => from(this.auth.createUserWithEmailAndPassword(email, password)))
            .pipe(
              catchError(err => {
                console.log('Handling error locally and rethrowing it...', err);
                return throwError(err);
              })
            );
  }

  login(email: string, password: string) {
    return defer(() => from(this.auth.signInWithEmailAndPassword( email, password)));
  }

  logout() {
    // logic for logout
  }
  
  isLoggedIn() {
    return this.auth.authState;
  }

}
