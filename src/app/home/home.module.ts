import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import {RouterModule, Routes} from "@angular/router";
import { SearchTicketsComponent } from './components/search-tickets/search-tickets.component';
import {FormInputComponent} from "../shared/components/form-input/form-input.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SearchTicketsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
    FormInputComponent
  ]
})
export class HomeModule { }
