import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tissue_collection } from 'src/app/models/tissue_collection';
import { TissueCollectionService } from 'src/app/services/tissue_collection/tissue_collection.service';

@Component({
  selector: 'app-tissuecollection-info',
  templateUrl: './tissuecollection-info.component.html',
  styleUrls: ['./tissuecollection-info.component.css']
})
export class TissuecollectionInfoComponent implements OnInit {

  constructor(private router: Router, private TissueCollectionService : TissueCollectionService) { }

  tissue_collections!: Observable<tissue_collection[]>;


  ngOnInit(): void {

    this.tissue_collections = this.TissueCollectionService.getAllTissueCollection()

  }

}
