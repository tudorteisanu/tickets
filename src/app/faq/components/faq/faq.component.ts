import { Component } from '@angular/core';
import { FaqInterface } from '@/faq/types/faq.interface';
import { FAQS } from '@/faq/data/faqs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  id = 2;

  constructor() {
    console.log('data');
  }

  public get faqs(): FaqInterface[] {
    return FAQS;
  }

  public trackByIndex(index: number): number {
    return index;
  }
}
