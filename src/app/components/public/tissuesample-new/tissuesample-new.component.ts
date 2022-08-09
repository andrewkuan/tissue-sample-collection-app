import { Component, Input, OnInit, ViewChild } from '@angular/core';
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

  @Input() collection_uid!: null|string;
  @Input() collection_id!: null|number;

  tissuesampleUID !: string;

  tissue_sample : tissue_sample = {
    uid: null,
    nid: null,
    collection_id: null,
    collection_uid: null,
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

  create(tissue_sample: tissue_sample){
    var newdoc = this.afs.collection('tissue-sample').ref.doc()
    this.TissueSampleService.createTissueSample({
              uid : newdoc.id,
              nid : tissue_sample.nid,
              collection_id : this.collection_id,
              collection_uid : this.collection_uid,
              donor_count : tissue_sample.donor_count,
              last_updated : new Date(Date.now()),
              material_type : tissue_sample.material_type
            },newdoc.id);

    // this.clearField(); 
    this.router.navigate(['/tissue-collection/'+this.collection_uid]);
  }

  //reset form function
  onClear(){
    this.form.reset();
  }

}
