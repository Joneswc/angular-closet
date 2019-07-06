import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosetRoutingModule } from './closet-routing.module';
import { ClothesListComponent } from './containers/clothes-list/clothes-list.component';
import { ClothesDetailComponent } from './containers/clothes-detail/clothes-detail.component';


@NgModule({
  declarations: [ClothesListComponent, ClothesDetailComponent],
  imports: [
    CommonModule,
    ClosetRoutingModule
  ]
})
export class ClosetModule { }
