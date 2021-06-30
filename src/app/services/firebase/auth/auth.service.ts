import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import auth from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword( email, password);
      console.log('result', result);
      return result;
    } catch(err) {
      console.error('Register error', err);
    }
  }

  logout() {
    // logic for logout
  }
  
  isLoggedIn() {
    return this.auth.authState;
  }

  async register(email: string, password: string) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch(err) {
      console.error('Register error', err);
    }
  }

}
