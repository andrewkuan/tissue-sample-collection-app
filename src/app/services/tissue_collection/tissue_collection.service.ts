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
    
    //Extraction of all tissue collection and order them by their nid
    this.tissuecollectionCollection = this.afs.collection('tissue-collection', ref => 
    ref.orderBy('nid','asc')); 

  }

  // Function to get all tissue collections from the database
  getAllTissueCollection(){
    return this.tissuecollectionCollection.snapshotChanges().pipe(map(actions =>(
      actions.map(a => {
        const data = a.payload.doc.data() as tissue_collection;
        const id = a.payload.doc.id;
        return { id, ...data};
      })
    )));
  }

  //Function to get a single tissue collection from the database
  getTissueCollection(tissuecollectionUID:string){
    this.tissuecollectionDocument = this.afs.doc('/tissue-collection/' + tissuecollectionUID)
    return this.tissuecollectionDocument.valueChanges()
  }

  //Function to create a new tissue collection entry in the database
  createTissueCollection(tissuecollection:tissue_collection, tissuecollectionUID:string){
    this.afs.collection("tissue-collection").doc(tissuecollectionUID).set(tissuecollection)
  }

  //Function to delete an existing tissue collection in the database
  deleteTissueCollection(tissuecollection:tissue_collection){
    this.afs.doc('/tissue-collection/'+tissuecollection.uid).delete()
  }

}
