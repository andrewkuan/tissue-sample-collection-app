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

  delete(tissue_sample:tissue_sample){
    if(confirm("Are you sure that you want to delete this?"))
      this.TissueSampleService.deleteTissueSample(tissue_sample);
      this.router.navigate(['/tissue_collection/'+tissue_sample.collection_uid]);
  }

}
