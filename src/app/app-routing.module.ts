import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home/home.component';

import { TissuecollectionDetailsComponent } from './components/public/tissuecollection-details/tissuecollection-details.component';
import { TissuecollectionEditComponent } from './components/public/tissuecollection-edit/tissuecollection-edit.component';
import { TissuecollectionInfoComponent } from './components/public/tissuecollection-info/tissuecollection-info.component';
import { TissuecollectionNewComponent } from './components/public/tissuecollection-new/tissuecollection-new.component';
import { TissuesampleNewComponent } from './components/public/tissuesample-new/tissuesample-new.component';

const routes: Routes = [

  { path: '', redirectTo: '/tissue_collection_info', pathMatch: 'full' },

  { path: 'home', component : HomeComponent},
  { path: 'tissue_collection_edit', component : TissuecollectionEditComponent},
  { path: 'tissue_collection_info', component : TissuecollectionInfoComponent},
  { path: 'tissue_collection/:uid', component : TissuecollectionDetailsComponent},
  { path: 'tissue_collection_new', component : TissuecollectionNewComponent},
  { path: 'tissue_sample_new', component : TissuesampleNewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
