import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tissue_sample } from 'src/app/models/tissue_sample';
import { TissueSampleService } from 'src/app/services/tissue_sample/tissue_sample.service';

@Component({
  selector: 'app-tissuesample-info',
  templateUrl: './tissuesample-info.component.html',
  styleUrls: ['./tissuesample-info.component.css']
})
export class TissuesampleInfoComponent implements OnInit {

  console = console;
  @Input()
    collection_id!: null|number;

  constructor(private router: Router, private TissueSampleService : TissueSampleService) { }

  tissue_samples!: Observable<tissue_sample[]>
  
  ngOnInit(): void {

    this.tissue_samples = this.TissueSampleService.getAllTissueSample()

  }

}
