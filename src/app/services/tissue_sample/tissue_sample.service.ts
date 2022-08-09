import { tissue_sample } from './../../models/tissue_sample';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})

export class TissueSampleService {

  tissuesampleCollection: AngularFirestoreCollection<tissue_sample>;
  tissuesampleDocument!: AngularFirestoreDocument<tissue_sample>;

  constructor(private afs : AngularFirestore) { 

    //Extraction of all tissue sample and order them by their nid
    this.tissuesampleCollection = this.afs.collection('tissue-sample', ref => ref.orderBy('nid','asc')); 

  }

  // Function to get all tissue samples from the database
  getAllTissueSample(){
    return this.tissuesampleCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as tissue_sample
        const id = a.payload.doc.id
        return { id, ...data}
      })
    }));
  }

  //Function to get a single tissue sample from the database
  getTissueSample(tissuesampleUID:string){
    this.tissuesampleDocument = this.afs.doc('/tissue-sample/' + tissuesampleUID)
    return this.tissuesampleDocument.valueChanges()
  }

  //Function to create a new tissue sample entry in the database
  createTissueSample(tissuesample:tissue_sample, tissuesampleUID:string){
    this.afs.collection("tissue-sample").doc(tissuesampleUID).set(tissuesample)
  }

  //Function to delete an existing tissue sample in the database
  deleteTissueSample(tissuesample:tissue_sample){
    this.afs.doc('/tissue-sample/'+ tissuesample.uid).delete()
  }

}
