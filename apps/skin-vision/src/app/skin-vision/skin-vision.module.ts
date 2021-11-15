import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkinVisionRoutingModule } from './skin-vision-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    SkinVisionRoutingModule
  ]
})
export class SkinVisionModule { }
