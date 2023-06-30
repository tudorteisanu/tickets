import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FaqComponent } from './components/faq/faq.component';
import {RouterModule, Routes} from '@angular/router';
import {AccordionItemComponent} from './components/accordion-item/accordion-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { FetchFAQEffect } from './store/effects/fetch-faq.effect';

const routes: Routes = [
  {
    path: 'faq',
    component: FaqComponent
  }
];

@NgModule({
  declarations: [
    FaqComponent,
    AccordionItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
    NgOptimizedImage,
    StoreModule.forFeature('faq', reducers),
    EffectsModule.forFeature([FetchFAQEffect])
  ]
})
export class FaqModule { }
