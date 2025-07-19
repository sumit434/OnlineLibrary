import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: '1',
      title: '1984',
      author: 'George Orwell',
      category: 'Fiction',
      description: 'A dystopian novel about totalitarianism.',
      rating: 4.6
    },
    {
      id: '2',
      title: 'The Hitchhiker’s Guide to the Galaxy',
      author: 'Douglas Adams',
      category: 'Sci-Fi',
      description: 'A comedic adventure through space.',
      rating: 4.4
    },
    {
      id: '3',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      description: 'A brief history of humankind.',
      rating: 4.7
    }
  ],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;