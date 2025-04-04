import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readProduct, Product } from '../lib/read';
import { toDollars } from '../lib/to-dollars';

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState<Product | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const product = await readProduct(Number(id));
        setItem(product);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Dependency array includes 'productId'

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Product not found</div>;

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={`${item.imageUrl}`} alt={item.name} />
      <p>{toDollars(item.price)}</p>
      <p>{item.shortDescription}</p>
      <p>{item.longDescription}</p>
      <button>Add to Cart</button>
    </div>
  );
}
