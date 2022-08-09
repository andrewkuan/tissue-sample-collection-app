import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { tissue_collection } from 'src/app/models/tissue_collection';

@Injectable({
  providedIn: 'root'
})
export class TissueCollectionService {

  tissuecollectionCollection: AngularFirestoreCollection<tissue_collection>;
  tissuecollectionDocument!: AngularFirestoreDocument<tissue_collection>;

  constructor(private afs: AngularFirestore) {  
    
    this.tissuecollectionCollection = this.afs.collection('tissue-collection', ref => 
    ref.orderBy('nid','asc')); 

  }

  getAllTissueCollection(){
    return this.tissuecollectionCollection.snapshotChanges().pipe(map(actions =>(
      actions.map(a => {
        const data = a.payload.doc.data() as tissue_collection;
        const id = a.payload.doc.id;
        return { id, ...data};
      })
    )));
  }

  getTissueCollection(tissuecollectionUID:string){
    this.tissuecollectionDocument = this.afs.doc('/tissue-collection/' + tissuecollectionUID)
    return this.tissuecollectionDocument.valueChanges()
  }

  createTissueCollection(tissuecollection:tissue_collection, tissuecollectionUID:string){
    this.afs.collection("tissue-collection").doc(tissuecollectionUID).set(tissuecollection)
  }

  deleteTissueCollection(tissuecollection:tissue_collection){
    this.afs.doc('/tissue-collection/'+tissuecollection.uid).delete()
  }

  updateTissueCollection(tissuecollection:tissue_collection, tissuecollectionUID:string){
    return this.afs.collection("tissue-collection").doc(tissuecollectionUID).update(tissuecollection);
  }

}
