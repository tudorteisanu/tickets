import { Component } from '@angular/core';
import {FaqInterface} from "../../types/faq.interface";
import {FAQS} from "../../data/faqs";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  get faqs(): FaqInterface[] {
    return FAQS;
  }
}
