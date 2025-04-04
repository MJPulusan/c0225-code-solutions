import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#333', padding: '1rem' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
          <li>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
