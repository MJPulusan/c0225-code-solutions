import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readProduct, Product } from '../lib/read';
import { toDollars } from '../lib/to-dollars';

export default function ItemDetails() {
  const { id } = useParams(); // Get product ID from URL parameters
  const [item, setItem] = useState<Product | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const product = await readProduct(Number(id)); // Fetch product details
        setItem(product);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Only re-fetch if ID changes

  if (loading) return <div>Loading...</div>; // Loading state
  if (!item) return <div>Product not found</div>; // Handle missing product

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
