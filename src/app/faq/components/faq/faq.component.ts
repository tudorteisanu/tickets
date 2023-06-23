import { Component, OnInit, Signal } from '@angular/core';
import { FaqInterface } from '@/faq/types/faq.interface';
import { Store } from '@ngrx/store';
import { fetchFaqAction } from '@/faq/store/actions/fetch-faqs.action';
import { faqsSelector, isLoadingsSelector } from '@/faq/store/faq.selectors';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs: Signal<FaqInterface[]> = this.store.selectSignal(faqsSelector);
  isLoading: Signal<boolean> = this.store.selectSignal(isLoadingsSelector);
  
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchFaqAction());
  }

  public trackByIndex(index: number): number {
    return index;
  }
}
