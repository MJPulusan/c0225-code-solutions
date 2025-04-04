import { Link, Outlet } from 'react-router-dom';
import './Layout.css'; // Optional styling

export function Layout() {
  return (
    <div>
      <header className="header">
        <h1 className="logo">🛍️ Catalog App</h1>
        <nav className="nav">
          <Link to="/">Catalog</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
