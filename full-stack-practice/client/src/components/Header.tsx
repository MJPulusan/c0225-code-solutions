import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <h1 className="logo">Mockup</h1>
      <nav className="nav">
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/catalog" className="nav-link">
          Catalog
        </Link>
      </nav>
    </header>
  );
}
