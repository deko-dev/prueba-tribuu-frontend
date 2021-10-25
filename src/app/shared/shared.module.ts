import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from './ng-zorro';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroModule
  ], 
  exports: [
    NgZorroModule
  ]
})
export class SharedModule { }
