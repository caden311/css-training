import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasQueryComponent } from './has-query.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HasQueryComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class HasQueryModule { }
