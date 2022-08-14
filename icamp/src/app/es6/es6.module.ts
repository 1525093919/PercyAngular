import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Es6Component } from './es6/es6.component';
import { Es7Component } from './es7/es7.component';
import { Es8Component } from './es8/es8.component';
import { Es9Component } from './es9/es9.component';
import { Es10Component } from './es10/es10.component';



@NgModule({
  declarations: [
    Es6Component,
    Es7Component,
    Es8Component,
    Es9Component,
    Es10Component
  ],
  imports: [
    CommonModule
  ],
  exports : [
    Es6Component
  ]
})
export class ES6Module { }
