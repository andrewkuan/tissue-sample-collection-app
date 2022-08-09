import { Component, OnInit, ViewChild } from '@angular/core';
import { tissue_collection } from 'src/app/models/tissue_collection';
import { TissueCollectionService } from 'src/app/services/tissue_collection/tissue_collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tissuecollection-new',
  templateUrl: './tissuecollection-new.component.html',
  styleUrls: ['./tissuecollection-new.component.css']
})
export class TissuecollectionNewComponent implements OnInit {

  tissuecollectionUID !: string;

  tissue_collection : tissue_collection = {
    uid: null,
    nid: null,
    disease_term: null,
    title: null
}


  constructor(
    private TissueCollectionService : TissueCollectionService,
    private router : Router,
    private route : ActivatedRoute,
    private afs: AngularFirestore
  ) {}

  ngOnInit(): void {}

  @ViewChild('tissue_collection_new',  {static: false}) form!: NgForm;

  save(tissue_collection: tissue_collection){
    this.TissueCollectionService.updateTissueCollection(tissue_collection, this.tissuecollectionUID);

    // this.clearField(); 
    this.router.navigate(['/tissue_collection_info']);
  }

  create(tissue_sample: tissue_collection){
    var newdoc = this.afs.collection('tissue-collection').ref.doc()
    this.TissueCollectionService.createTissueCollection({
              uid : newdoc.id,
              nid : 1,
              disease_term : tissue_sample.disease_term,
              title : tissue_sample.title
            },newdoc.id);
    
    console.log("working")

    // this.clearField(); 
    this.router.navigate(['/tissue_collection_info']);
  }

  //reset form function
  onClear(){
    this.form.reset();
  }

  cancel(){
    this.router.navigate(['/tissue_collection_info']);
  }

}
