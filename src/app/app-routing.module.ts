import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', pathMatch: 'prefix', redirectTo: 'comic'
}, {
  path: 'comic', loadChildren: () => import('../modules/comic/comic.module').then(m => m.ComicModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
