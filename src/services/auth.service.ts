import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {}

  // ✅ Google Sign-In
  googleSignIn() {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }

  // ✅ Email & Password Sign-In
  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  // ✅ Sign-Up with Email & Password
  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  // ✅ Logout
  logout() {
    return from(signOut(this.auth));
  }

  // ✅ Get Current User
  getCurrentUser(): Observable<User | null> {
    return new Observable((subscriber) => {
      this.auth.onAuthStateChanged(subscriber);
    });
  }
}
