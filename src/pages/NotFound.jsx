import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
    <Link to="/" className="text-blue-600 underline">Go back to Home</Link>
  </div>
);

export default NotFound;
