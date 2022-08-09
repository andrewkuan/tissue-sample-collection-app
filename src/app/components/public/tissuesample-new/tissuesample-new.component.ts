import { Component, OnInit, ViewChild } from '@angular/core';
import { tissue_sample } from 'src/app/models/tissue_sample';
import { TissueSampleService } from 'src/app/services/tissue_sample/tissue_sample.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tissuesample-new',
  templateUrl: './tissuesample-new.component.html',
  styleUrls: ['./tissuesample-new.component.css']
})
export class TissuesampleNewComponent implements OnInit {

  tissuesampleUID !: string;

  tissue_sample : tissue_sample = {
    uid: null,
    nid: null,
    collection_id: null,
    donor_count: null,
    last_updated: null,
    material_type: null
}


  constructor(
    private TissueSampleService : TissueSampleService,
    private router : Router,
    private route : ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  ngOnInit(): void {}

  @ViewChild('tissue_sample_new',  {static: false}) form!: NgForm;

  save(tissue_sample: tissue_sample){
    this.TissueSampleService.updateTissueSample(tissue_sample, this.tissuesampleUID);

    // this.clearField(); 
    this.router.navigate(['/tissue_collection_info']);
  }

  create(tissue_sample: tissue_sample){
    var newdoc = this.afs.collection('tissue-sample').ref.doc()
    this.TissueSampleService.createTissueSample({
              uid : newdoc.id,
              nid : 1,
              collection_id : tissue_sample.collection_id,
              donor_count : tissue_sample.donor_count,
              last_updated : new Date(Date.now()),
              material_type : tissue_sample.material_type
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
