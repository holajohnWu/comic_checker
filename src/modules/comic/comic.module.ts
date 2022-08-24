import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicRoutingModule } from './comic-routing.module';
import { ComicInfoComponent } from './comic-info/comic-info.component';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MAT_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatListModule,
  MatDividerModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [
    ComicInfoComponent
  ],
  imports: [
    CommonModule,
    ...MAT_MODULES,
    ComicRoutingModule
  ]
})
export class ComicModule { }
