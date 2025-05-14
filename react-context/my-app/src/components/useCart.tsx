import { useContext } from 'react';
import { CartContext, ContextValues } from './CartContext';

export function useCart(): ContextValues {
  const cartVal = useContext(CartContext);

  if (!cartVal)
    throw new Error('useCart can only be used inside a CartProvider');
  return cartVal;
}
