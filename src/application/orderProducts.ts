import { Cart } from '../domain/cart';
import { createOrder } from '../domain/order';
import { User } from '../domain/user';
import { useNotification } from '../services/notificationAdapter';

export function useOrderProducts() {
  const notifier = useNotification();
  const payment = usePayment();
  const orderStorage = useOrderStorage();

  async function orderProducts(user: User, cart: Cart) {
    const order = createOrder(user, cart);

    const paid = await payment.tryPay(order.total);

    if (!paid) {
      return notifier.notify('Something went wrong!');
    }

    const { orders } = orderStorage;

    orderStorage.updateOrder([...orders, order]);
  }

  return { orderProducts };
}
