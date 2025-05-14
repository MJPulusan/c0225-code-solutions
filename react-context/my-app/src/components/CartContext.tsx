import { createContext, useState } from 'react';
import { Product } from '../lib/data';

export type ContextValues = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<ContextValues>({
  cart: [],
  addToCart: () => undefined,
});

type Props = {
  children: React.ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product): void {
    setCart([...cart, product]);
  }

  const cartContextValues = { cart, addToCart };

  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
}
