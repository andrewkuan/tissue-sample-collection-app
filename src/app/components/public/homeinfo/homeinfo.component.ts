import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { TissueCollectionService } from './../../../services/tissue_collection/tissue-collection.service';
import { tissue_collection } from './../../../models/tissue_collection';

import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-homeinfo',
  templateUrl: './homeinfo.component.html',
  styleUrls: ['./homeinfo.component.scss']
})
export class HomeinfoComponent implements OnInit {

  constructor(private TissueCollectionService : TissueCollectionService, private router: Router) { }

  tissue_collections: Observable<tissue_collection[]> | undefined;
  subscription: Subscription | undefined;
  showSpinner: boolean = true;
  itemExist = true;

  ngOnInit(): void {

    this.tissue_collections = this.TissueCollectionService.getAllTissueCollection()

  }

}
