import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { CartContext } from './components/CartContext';
import { Product } from './lib/data';
import { useState } from 'react';

export function App() {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product): void {
    setCart([...cart, product]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}
