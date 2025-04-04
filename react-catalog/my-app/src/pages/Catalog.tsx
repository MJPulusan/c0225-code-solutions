import { useEffect, useState } from 'react';
import { readCatalog, Product } from '../lib/read';
import { ProductCard } from '../components/ProductCard';

export function Catalog() {
  const [catalogItems, setCatalogItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCatalog = async () => {
      const items = await readCatalog();
      setCatalogItems(items);
      setLoading(false);
    };

    fetchCatalog();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Catalog</h1>
      <div className="catalog">
        {catalogItems.map((item) => (
          <ProductCard key={item.productId} {...item} />
        ))}
      </div>
    </div>
  );
}
