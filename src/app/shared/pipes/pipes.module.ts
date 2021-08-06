import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZfillPipe } from './zfill.pipe';



@NgModule({
  declarations: [
    ZfillPipe
  ],
  exports: [
    ZfillPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
