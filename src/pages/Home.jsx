import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import CategoryList from '../components/CategoryList';

const Home = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];
  const books = useSelector((state) => state.books);
  const popularBooks = books.slice(0, 3);

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4 flex justify-center ">Welcome to the Online Library</h1>
      <h2 className="text-xl font-semibold flex justify-center">Book Categories</h2>
      <CategoryList  categories={categories} />

      <h2 className="text-xl font-semibold mt-10 flex justify-center">Popular Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {popularBooks.map((book) => (
    <BookCard key={book.id} book={book} />
  ))}
</div>
    </div>
  );
};

export default Home;