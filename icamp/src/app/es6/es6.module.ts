import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Es6Component } from './es6/es6.component';



@NgModule({
  declarations: [
    Es6Component
  ],
  imports: [
    CommonModule
  ],
  exports : [
    Es6Component
  ]
})
export class ES6Module { }
