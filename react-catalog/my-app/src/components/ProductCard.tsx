import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export function ProductCard({ id, name, imageUrl, price }: ProductCardProps) {
  return (
    <div className="product-card">
      <Link to={`/details/${id}`}>
        <img src={`/images/${imageUrl}`} alt={name} />
        <h3>{name}</h3>
        <p>{`$${price.toFixed(2)}`}</p>
      </Link>
    </div>
  );
}
