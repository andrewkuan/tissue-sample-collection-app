import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeinfoComponent } from './components/public/homeinfo/homeinfo.component';
import { TissuecollectionDetailsComponent } from './components/public/tissuecollection-details/tissuecollection-details/tissuecollection-details.component';
import { TissuecollectionEditComponent } from './components/public/tissuecollection-edit/tissuecollection-edit.component';
import { TissuecollectionInfoComponent } from './components/public/tissuecollection-info/tissuecollection-info.component';

const routes: Routes = [

  { path: '', redirectTo: '/tissuecollection-info', pathMatch: 'full' },

  { path: 'home', component : HomeinfoComponent},
  { path: 'tissuecollection-edit', component : TissuecollectionEditComponent},
  { path: 'tissuecollection-info', component : TissuecollectionInfoComponent},
  { path: 'tissue_collection/:uid', component : TissuecollectionDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [

  HomeinfoComponent
  ];