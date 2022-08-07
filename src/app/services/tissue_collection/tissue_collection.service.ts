import { tissue_collection } from './../../models/tissue_collection';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class TissuecollectionService {

  tissuecollectionCollection: AngularFirestoreCollection<tissue_collection>;
  tissuecollectionDocument: AngularFirestoreDocument<tissue_collection>;

  constructor( private afs : AngularFirestore) { 

    this.tissuecollectionCollection = this.afs.collection('tissue_collection', ref => ref.orderBy('uid','desc')); 
    this.tissuecollectionDocument = this.afs.doc('tissue_collection'); 

  }

  getAllTissueCollection(){
    return this.tissuecollectionCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as tissue_collection
        const id = a.payload.doc.id
        return { id, ...data}
      })
    }));
  }

  getTissueCollection(tissuecollectionUID:string){
    this.tissuecollectionDocument = this.afs.doc('/Tissue Collection/' + tissuecollectionUID)
    return this.tissuecollectionDocument.valueChanges()
  }

  createTissueCollection(tissuecollection:tissue_collection, tissuecollectionUID:string){
    this.afs.collection("Tissue Collection").doc(tissuecollectionUID).set(tissuecollection)
  }

  deleteTissueCollection(tissuecollection:tissue_collection){
    this.afs.doc('/Tissue Collection/'+ tissuecollection.uid).delete()
  }

  updateTissueCollection(tissuecollection:tissue_collection, tissuecollectionUID:string){
    return this.afs.collection("Tissue Collection").doc(tissuecollectionUID).update(tissuecollection);
  }

}
