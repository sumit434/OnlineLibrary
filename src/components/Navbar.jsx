import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-700 text-white px-6 py-4 shadow">
    {/* Improved color, spacing, and shadow */}
    <div className="max-w-4xl mx-auto flex gap-4 justify-center">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/books" className="hover:underline">Browse Books</Link>
      <Link to="/add-book" className="hover:underline">Add Book</Link>
    </div>
  </nav>
);

export default Navbar;