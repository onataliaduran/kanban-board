import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import auth from 'firebase/app';
import { defer, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  register(email: string, password: string) {
    return defer(() => from(this.auth.createUserWithEmailAndPassword(email, password)));
  }

  async login(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword( email, password);
      return result;
    } catch(err) {
      console.error('Login error on auth service', err);
    }
  }

  logout() {
    // logic for logout
  }
  
  isLoggedIn() {
    return this.auth.authState;
  }

}
