import { Link } from 'react-router-dom';
import { toDollars } from '../lib/to-dollars';
import { Product } from '../lib/read';

export default function ItemComponent({ item }: { item: Product }) {
  return (
    <div className="item-card">
      <img src={`${item.imageUrl}`} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{toDollars(item.price)}</p>
      <Link to={`${item.productId}`}>View Details</Link>
    </div>
  );
}
