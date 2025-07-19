import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

const AddBook = () => {
  const [form, setForm] = useState({
    title: '', author: '', category: '', description: '', rating: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...form, id: Date.now().toString() }));
    navigate('/books');
  };

  return (
    <div className="p-4 ">
      <h2 className="text-xl font-semibold mb-4  ">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="border p-2 w-full" />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required className="border p-2 w-full" />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required className="border p-2 w-full" />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required className="border p-2 w-full" />
        <input name="rating" type="number" placeholder="Rating" value={form.rating} onChange={handleChange} required className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;