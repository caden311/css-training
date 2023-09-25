import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeComponent } from './relative.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    RelativeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ]
})
export class RelativeModule { }
