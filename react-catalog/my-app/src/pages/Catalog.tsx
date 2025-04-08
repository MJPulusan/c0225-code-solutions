import { useEffect, useState } from 'react';
import { readCatalog, Product } from '../lib/read';
import { ProductCard } from '../components/ProductCard';

export function Catalog() {
  const [catalogItems, setCatalogItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const items = await readCatalog();
        setCatalogItems(items);
      } catch (err) {
        setError(err);
        console.error('Failed to load catalog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCatalog();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        <p>Error!: Sorry, there was a problem loading the catalog.</p>
        {/* <pre>{(error as Error).message}</pre> */}
      </div>
    );

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
