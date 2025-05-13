import { Outlet, Link } from 'react-router';
import '../css/Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/books">Home</Link>
          <Link to="/books/add">Add Book</Link>
        </div>
      </nav>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};


export default Layout;
