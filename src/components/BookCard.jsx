import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full break-words overflow-hidden mt-8">
  {/* Prevents overflow of long words/titles */}
  <h3 className="text-xl font-semibold mb-2 text-gray-800 truncate">{book.title}</h3>
  <p className="text-sm text-gray-600 mb-1 overflow-hidden text-ellipsis whitespace-nowrap">
    Author: {book.author}
  </p>
  <p className="text-sm text-gray-600 mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
    Category: {book.category}
  </p>
  <Link to={`/book/${book.id}`} className="text-blue-600 hover:underline text-sm">View Details</Link>
</div>

);

export default BookCard;