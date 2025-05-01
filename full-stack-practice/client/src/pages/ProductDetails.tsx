import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { readProduct, Product } from '../lib/read';
import { toDollars } from '../lib/to-dollars';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const product = await readProduct(Number(id));
          setItem(product);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        console.error();
        console.error('Failed to fetch product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  function handleAddToCart() {
    if (item) {
      alert(`Added to ${item.name} cart!`);
      navigate('/catalog');
    } else {
      alert('Product not found');
    }
  }

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        <p> Error!: Sorry, there was a problem loading the product details.</p>
      </div>
    );

  if (!item) return <div>Product not found</div>;

  return (
    <div className="item-details">
      <Link to="/catalog" className="back-link">
        &lt; Back to Catalog
      </Link>
      <div className="details-container">
        <div className="image-container">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="info-container">
          <h2>{item.name}</h2>
          <p>{toDollars(item.price)}</p>
          <p>{item.shortDescription}</p>
        </div>
      </div>
      <p>{item.longDescription}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
