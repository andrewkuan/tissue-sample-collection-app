import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { tissue_collection } from 'src/app/models/tissue_collection';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class TissueCollectionService {

  tissuecollectionCollection: AngularFirestoreCollection<tissue_collection>;
  tissuecollectionDocument: AngularFirestoreDocument<tissue_collection> | undefined;
  dataSource: MatTableDataSource<tissue_collection> | undefined;

  constructor(private afs: AngularFirestore) {  
    
    this.tissuecollectionCollection = this.afs.collection('tissue-collection', ref => 
    ref.orderBy('nid','asc')); 

  }

  getAllTissueCollection(){
    return this.tissuecollectionCollection.snapshotChanges().pipe(map(actions =>(
      actions.map(a => {
        const data = a.payload.doc.data() as tissue_collection;
        const id = a.payload.doc.id;
        console.log(id)
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
    this.afs.doc('/tissue-collection/').delete()
  }

  updateTissueCollection(tissuecollection:tissue_collection, tissuecollectionUID:string){
    return this.afs.collection("tissue-collection").doc(tissuecollectionUID).update(tissuecollection);
  }

  filterCheck(query: string, tissuecollectionDataSource: MatTableDataSource<tissue_collection>){
    this.dataSource = tissuecollectionDataSource;
    this.dataSource.filter = query.trim().toLowerCase();
    
    return this.dataSource.filteredData.length == 0 ? false : true;
  }

}
