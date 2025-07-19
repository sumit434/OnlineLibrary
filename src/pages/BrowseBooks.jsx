import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';

const BrowseBooks = () => {
  const books = useSelector((state) => state.books);
  const { category } = useParams();
  const [query, setQuery] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchCategory = category ? book.category === category : true;
    const matchSearch =
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Browse Books {category && `in ${category}`}</h2>
      <input  
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full mb-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Cards now appear in a responsive grid layout */}
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;