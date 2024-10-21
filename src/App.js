import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';

const initialBooks = [
  { id: 1, title: 'Book One', author: 'Author One', genre: 'Fiction', publicationDate: '2020', borrowed: false },
  { id: 2, title: 'Book Two', author: 'Author Two', genre: 'Non-Fiction', publicationDate: '2019', borrowed: false },
];

const App = () => {
  const [books, setBooks] = useState(initialBooks);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleBorrow = (book) => {
    setBooks(books.map((b) => (b.id === book.id ? { ...b, borrowed: true } : b)));
  };

  const handleReturn = (book) => {
    setBooks(books.map((b) => (b.id === book.id ? { ...b, borrowed: false } : b)));
  };

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1, borrowed: false }]);
  };

  const handleEditBook = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
    setIsEditing(false);
    setSelectedBook(null);
  };
  return (
    <div className="App p-4">
      <h1 className="text-3xl mb-4">E-Library Management</h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <BookList books={books} onSelect={setSelectedBook} />
        </div>
        <div>
          <BookDetail book={selectedBook} onBorrow={handleBorrow} onReturn={handleReturn} />
        </div>
        <div>
          {isEditing ? (
            <BookForm
              initialData={selectedBook}
              onSubmit={handleEditBook}
              isEdit={true}
            />
          ) : (
            <BookForm
              onSubmit={handleAddBook}
              isEdit={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
