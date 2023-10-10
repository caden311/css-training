import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerQueryComponent } from './pages/container-query/container-query.component';
import { HomeComponent } from './pages/home/home.component';
import { HasQueryComponent } from './pages/has-query/has-query.component';
import { PopoverComponent } from './pages/popover/popover.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { KeyframeComponent } from './pages/keyframe/keyframe.component';
import { GridComponent } from './pages/grid/grid.component';
import { FlexComponent } from './pages/flex/flex.component';
import { RelativeComponent } from './pages/relative/relative.component';

const routes: Routes = [
  {component: HomeComponent, path: 'home'},
  {component: GridComponent, path: 'grid'},
  {component: FlexComponent, path: 'flex'},
  {component: RelativeComponent, path: 'relative'},
  {component: PopoverComponent, path: 'popover'},
  {component: KeyframeComponent, path: 'keyframe'},
  {component: AnimationComponent, path: 'animation'},
  {component: HasQueryComponent, path: 'has-query'},
  {component: ContainerQueryComponent, path: 'container-query'},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
