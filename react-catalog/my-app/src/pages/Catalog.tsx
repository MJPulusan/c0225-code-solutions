import { useEffect, useState } from 'react';
import { readCatalog, Product } from '../lib/read';
import ItemComponent from '../components/ItemComponent';

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
      <h2>Catalog</h2>
      <div className="catalog">
        {catalogItems.map((item) => (
          <ItemComponent key={item.productId} item={item} />
        ))}
      </div>
    </div>
  );
}
