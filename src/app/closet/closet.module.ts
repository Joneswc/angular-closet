import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosetRoutingModule } from './closet-routing.module';
import { ClothesListComponent } from './component/clothes-list/clothes-list.component';
import { ClothesDetailComponent } from './component/clothes-detail/clothes-detail.component';


@NgModule({
  declarations: [ClothesListComponent, ClothesDetailComponent],
  exports: [
    ClothesListComponent,
    ClothesDetailComponent
  ],
  imports: [
    CommonModule,
    ClosetRoutingModule
  ]
})
export class ClosetModule { }
