import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from './animation.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AnimationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class AnimationModule { }
