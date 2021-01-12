import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any>;

  constructor(
    private _afAuth: AngularFireAuth,
    private _afStore: AngularFirestore,
    private _router: Router
  ) { 
    this.user = this._afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this._afStore.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  getUser(){
    return this.user.pipe(first()).toPromise();
  }

  getUserInfo(){
    return this._afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this._afStore.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  async signIn(value){
    return this._afAuth.signInWithEmailAndPassword(value.email, value.password)
      .then(data => {
        this._router.navigate(['/main']);
      })
  }

  async signOut(){
    if(this._afAuth.currentUser){
      return this._afAuth.signOut().then(data => {
        console.log(data);
      })
    }
  }

  signUp(value){
    return this._afAuth.createUserWithEmailAndPassword(value.email, value.password)
      .then(data => {
        this._afStore.collection('users').doc(data.user.uid).set({
          email: value.email,
          firstName: value.firstName,
          lastName: value.lastName,
          address: {
            province: value.province,
            city: value.city,
            barangay: value.barangay,
            street: value.street,
            otherInfo: value.otherInfo
          },
          mobileNumber: value.mobileNumber,
          birthDate: value.birthDate,
          uid: data.user.uid
        })
      }, err => console.log(err));
  }
}
