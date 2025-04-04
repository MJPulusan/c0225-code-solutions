import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readProduct } from '../lib/';
import { toDollars } from '../lib/to-dollars';
import { Product } from '../lib/read';

export function ProductDetails() {
  const { id } = useParams();
  const [item, setItem] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const product = await readProduct(Number(id));
          if (product) {
            setItem(product);
          } else {
            setItem(null); // or handle this case in a different way
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setItem(null); // Optionally, set an error state here
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Product not found</div>;

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={`/images/${item.imageUrl}`} alt={item.name} />
      <p>{toDollars(item.price)}</p>
      <p>{item.shortDescription}</p>
      <p>{item.longDescription}</p>
      <button>Add to Cart</button>
    </div>
  );
}
