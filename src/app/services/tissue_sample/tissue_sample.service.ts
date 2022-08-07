import { tissue_sample } from './../../models/tissue_sample';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class TissuesampleService {

  tissuesampleCollection: AngularFirestoreCollection<tissue_sample>;
  tissuesampleDocument!: AngularFirestoreDocument<tissue_sample>;

  constructor( private afs : AngularFirestore) { 

    this.tissuesampleCollection = this.afs.collection('tissue_sample', ref => ref.orderBy('uid','desc')); 

  }

  getAllTissueSample(){
    return this.tissuesampleCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as tissue_sample
        const id = a.payload.doc.id
        return { id, ...data}
      })
    }));
  }

  getTissueSample(tissuesampleUID:string){
    this.tissuesampleDocument = this.afs.doc('/Tissue Sample/' + tissuesampleUID)
    return this.tissuesampleDocument.valueChanges()
  }

  createTissueSample(tissuesample:tissue_sample, tissuesampleUID:string){
    this.afs.collection("Tissue Sample").doc(tissuesampleUID).set(tissuesample)
  }

  deleteTissueSample(tissuesample:tissue_sample){
    this.afs.doc('/Tissue Sample/'+ tissuesample.uid).delete()
  }

  updateTissueSample(tissuesample:tissue_sample, tissuesampleUID:string){
    return this.afs.collection("Tissue Sample").doc(tissuesampleUID).update(tissuesample);
  }

}
