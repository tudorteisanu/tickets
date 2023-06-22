import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FaqComponent } from './components/faq/faq.component';
import {RouterModule, Routes} from "@angular/router";
import {AccordionItemComponent} from "./components/accordion-item/accordion-item.component";

const routes: Routes = [
  {
    path: '',
    component: FaqComponent
  }
]

@NgModule({
  declarations: [
    FaqComponent,
    AccordionItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgOptimizedImage
  ]
})
export class FaqModule { }
