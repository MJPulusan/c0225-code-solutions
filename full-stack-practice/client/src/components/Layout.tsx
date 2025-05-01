import { Link, Outlet } from 'react-router-dom';
import '../App.css';

export function Layout() {
  return (
    <div>
      <h1 className="logo">Mockup</h1>
      <header className="header">
        <nav className="nav">
          <Link to="/About">About</Link>
          <Link to="/Catalog">Catalog</Link>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
