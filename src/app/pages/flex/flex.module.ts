import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    FlexComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
  ]
})
export class FlexModule { }
