import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface';
import { FaqInterface } from './faq.interface';

export interface FAQStateInterface {
  isLoading: boolean;
  error: BackendErrorInterface | null;
  data: FaqInterface[];
}
