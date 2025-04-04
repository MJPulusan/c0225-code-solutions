import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import './Layout.css';
import ItemDetails from './components/ItemDetails'; // Adjust the import path as needed

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Catalog />} />
        <Route path="/item/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Route>
    </Routes>
  );
}
