import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClothesListComponent} from './component/clothes-list/clothes-list.component';
import {ClothesDetailComponent} from './component/clothes-detail/clothes-detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: ClothesListComponent },
  { path: 'detail', component: ClothesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosetRoutingModule { }
