import { BackendErrorInterface } from '@/shared/types/backend-error.interface';

export interface ContactStateInterface {
  isSubmitting: boolean,
  error: BackendErrorInterface | null
}