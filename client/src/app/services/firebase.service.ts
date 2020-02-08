import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public fireStore: AngularFirestore
  ) { }

  getAllNews() {
    return this.fireStore.collection('test').valueChanges(); 

  }
}
