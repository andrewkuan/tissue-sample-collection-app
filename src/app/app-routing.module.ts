import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home/home.component';

import { TissuecollectionDetailsComponent } from './components/public/tissuecollection-details/tissuecollection-details.component';
import { TissuecollectionEditComponent } from './components/public/tissuecollection-edit/tissuecollection-edit.component';
import { TissuecollectionInfoComponent } from './components/public/tissuecollection-info/tissuecollection-info.component';

const routes: Routes = [

  { path: '', redirectTo: '/tissue_collection_info', pathMatch: 'full' },

  { path: 'home', component : HomeComponent},
  { path: 'tissue_collection_edit', component : TissuecollectionEditComponent},
  { path: 'tissue_collection_info', component : TissuecollectionInfoComponent},
  { path: 'tissue_collection/:uid', component : TissuecollectionDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [

  ];