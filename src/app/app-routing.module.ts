import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { InterpolationComponent } from './interpolation-binding/interpolation-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
 
  {
    path:"lazyorders",loadChildren:()=>import("./lazy-eager/lazyloading/lazyorders.module").
    then(mod=>mod.LazyordersModule)
  },
  {
    path: 'interpolation',
  component: InterpolationComponent,
  pathMatch: 'full',
    
  },
  {
    path: 'directives',
  component: DirectivesComponent,
  pathMatch: 'full',
    
  },
  {
    path: 'pipes',
  component: PipesComponent,
  pathMatch: 'full',
    
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
