import React, { useState } from 'react';

const BookList = ({ books, onSelect }) => {
  const [filters, setFilters] = useState({
    genre: '',
    author: '',
    publicationDate: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredBooks = books.filter((book) => {
    return (
      (filters.genre === '' || book.genre.includes(filters.genre)) &&
      (filters.author === '' || book.author.includes(filters.author)) &&
      (filters.publicationDate === '' || book.publicationDate.includes(filters.publicationDate))
    );
  });

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Book List</h2>
      <div className="p-2 mb-2 w-full">
        <input
          type="text"
          name="genre"
          placeholder="Filter by Genre"
          className="border p-2"
          onChange={handleFilterChange}
        />
      </div>
      <div className="p-2 mb-2 w-full">
        <input
          type="text"
          name="author"
          placeholder="Filter by Author"
          className="border p-2"
          onChange={handleFilterChange}
        />
      </div>
      <div className="p-2 mb-2 w-full">
        <input
          type="text"
          name="publicationDate"
          placeholder="Filter by Date"
          className="border p-2"
          onChange={handleFilterChange}
        />
      </div>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id} className="border p-4 mb-2" onClick={() => onSelect(book)}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
