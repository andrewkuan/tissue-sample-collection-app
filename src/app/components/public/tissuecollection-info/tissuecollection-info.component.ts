import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tissue_collection } from 'src/app/models/tissue_collection';
import { TissueCollectionService } from 'src/app/services/tissue_collection/tissue-collection.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tissuecollection-info',
  templateUrl: './tissuecollection-info.component.html',
  styleUrls: ['./tissuecollection-info.component.css']
})
export class TissuecollectionInfoComponent implements OnInit {

  constructor(private router: Router, private TissueCollectionService : TissueCollectionService) { }

  tissue_collections!: Observable<tissue_collection[]>;
  subscription!: Subscription;
  tissuecollectionDataSource!: MatTableDataSource<tissue_collection>;
  showSpinner: boolean = true;
  itemExist = true;


  ngOnInit(): void {

    this.tissue_collections = this.TissueCollectionService.getAllTissueCollection()

  }

  filter(query:string){
    //filter from jobService
      this.itemExist = this.TissueCollectionService.filterCheck(query,this.tissuecollectionDataSource);
    }

}
