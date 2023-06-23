import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FaqInterface } from '../types/faq.interface';

import{FAQS} from '@/faq/data/faqs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  constructor(private http: HttpClient) { }

  public fetchFaq(): Observable<FaqInterface[]> {
    return of(FAQS);
  }
}
