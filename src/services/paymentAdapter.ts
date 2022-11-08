import { PaymentService } from '../application/ports';

export function usePayment(): PaymentService {
  return {
    async tryPay(amount: PriceCents): Promise<boolean> {
      return true;
    },
  };
}
