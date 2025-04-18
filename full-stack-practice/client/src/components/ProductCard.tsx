import { Link } from 'react-router-dom';
import { toDollars } from '../lib/to-dollars';

type ProductCardProps = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
};

export function ProductCard({
  productId,
  imageUrl,
  name,
  price,
  shortDescription,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <Link to={`/details/${productId}`}>
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p>{toDollars(price)}</p>
        <p>{shortDescription}</p>
      </Link>
    </div>
  );
}
