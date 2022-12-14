import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tissue_collection } from 'src/app/models/tissue_collection';
import { TissueCollectionService } from 'src/app/services/tissue_collection/tissue_collection.service';

@Component({
  selector: 'app-tissuecollection-details',
  templateUrl: './tissuecollection-details.component.html',
  styleUrls: ['./tissuecollection-details.component.css']
})
export class TissuecollectionDetailsComponent implements OnInit {

  tissue_collection !: tissue_collection;

  constructor(
    private route: ActivatedRoute,
    private TissueCollectionService: TissueCollectionService
  ) {}

  ngOnInit(): void {
    this.getTissueCollection();
  }

  //Function to make pull all the details of the chosen tissue collection
  getTissueCollection(){
    const id = this.route.snapshot.paramMap.get('uid')
    return this.TissueCollectionService.getTissueCollection(id!).subscribe( data => this.tissue_collection = data!)
  }

}
