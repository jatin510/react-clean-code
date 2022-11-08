import { Cart } from '../domain/cart';
import { Order } from '../domain/order';
import { User, UserName } from '../domain/user';

export interface UserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export interface CartStorageService {
  car?: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}

export interface OrderStorageService {
  orders: Order[];
  updateOrder(order: Order[]): void;
}

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}

export interface NotificationService {
  notify(message: string): void;
}

export interface PaymentService {
  tryPay(amount: PriceCents): Promise<boolean>;
}
