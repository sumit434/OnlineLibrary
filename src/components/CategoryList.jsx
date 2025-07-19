import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => (
  <ul className="flex flex-wrap gap-3 my-4 justify-center">
    {/* Styled as horizontal list with spacing */}
    {categories.map((category) => (
      <li key={category}>
        <Link to={`/books/${category}`} className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">
          {category}
        </Link>
      </li>
    ))}
  </ul>
);

export default CategoryList;