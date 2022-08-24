import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicInfoComponent } from './comic-info/comic-info.component';

const routes: Routes = [{
  path: '', component: ComicInfoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicRoutingModule { }
