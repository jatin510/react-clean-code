import React, { useState } from 'react';
import { useContext } from 'react';

const StoreContext = React.createContext<any>({});

export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = (props: React.PropsWithChildren) => {
  const { children } = props;

  const [user, setUser] = useState();
  const [cart, setCart] = useState({ products: [] });
  const [orders, setOrders] = useState([]);

  const value = {
    user,
    cart,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
