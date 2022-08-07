import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { TissuecollectionService } from './../../../services/tissue_collection/tissue_collection.service';
import { tissue_collection } from './../../../models/tissue_collection';

import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-homeinfo',
  templateUrl: './homeinfo.component.html',
  styleUrls: ['./homeinfo.component.scss']
})
export class HomeinfoComponent implements OnInit {

  constructor(private TissuecollectionService : TissuecollectionService, private router: Router) { }

  tissue_collections!: Observable<tissue_collection[]>;
  subscription!: Subscription;
  showSpinner: boolean = true;
  itemExist = true;

  ngOnInit(): void {
    
    this.tissue_collections = this.TissuecollectionService.getAllTissueCollection()

  }

}
