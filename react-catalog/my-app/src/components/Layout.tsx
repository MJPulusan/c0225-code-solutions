import { Link, Outlet } from 'react-router-dom';
import '../Layout.css'; // Optional styling

export function Layout() {
  return (
    <div>
      <h1 className="logo">Mockup</h1>
      <header className="header">
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
