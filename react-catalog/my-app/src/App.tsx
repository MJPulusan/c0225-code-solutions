import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import './Layout.css';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
