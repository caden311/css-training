import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { ContainerQueryModule } from './pages/container-query/container-query.module';
import { HasQueryModule } from './pages/has-query/has-query.module';
import { PopoverModule } from './pages/popover/popover.module';
import { AnimationModule } from './pages/animation/animation.module';
import { KeyframeModule } from './pages/keyframe/keyframe.module';
import { GridModule } from './pages/grid/grid.module';
import { FlexModule } from './pages/flex/flex.module';
import { RelativeModule } from './pages/relative/relative.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    ContainerQueryModule,
    GridModule,
    HasQueryModule,
    KeyframeModule,
    PopoverModule,
    AnimationModule,
    FlexModule,
    RelativeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
