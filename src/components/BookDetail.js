import React from 'react';

const BookDetail = ({ book, onBorrow, onReturn }) => {
  if (!book) {
    return <div>Select a book to view details</div>;
  }

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
      <p className="text-gray-600 mb-2"><strong>Author:</strong> {book.author}</p>
      <p className="text-gray-600 mb-2"><strong>Genre:</strong> {book.genre}</p>
      <p className="text-gray-600 mb-2"><strong>Publication Date:</strong> {book.publicationDate}</p>
      
      <div className="mt-4">
        {book.borrowed ? (
          <button 
            onClick={() => onReturn(book)} 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Return
          </button>
        ) : (
          <button 
            onClick={() => onBorrow(book)} 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Borrow
          </button>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
