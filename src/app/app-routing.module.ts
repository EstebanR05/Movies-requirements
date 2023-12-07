import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/moviesView', pathMatch: 'full' },
  {path: 'moviesView',component: MoviesListComponent},
  { path: '**', redirectTo: '/moviesView' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
