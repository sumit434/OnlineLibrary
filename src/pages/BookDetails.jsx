import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.find((b) => b.id === id));

  if (!book) return <p className="p-4">Book not found.</p>;

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <button onClick={() => navigate('/books')} className="mt-4 text-blue-600 underline">
        Back to Browse  
      </button>
    </div>
  );
};

export default BookDetails;