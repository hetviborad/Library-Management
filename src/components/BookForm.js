import React, { useState, useEffect } from 'react';

const BookForm = ({ onSubmit, initialData, isEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', author: '', genre: '', publicationDate: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <h2 className="text-xl mb-4">{isEdit ? 'Edit Book' : 'Create Book'}</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder="Title"
        className="border p-2 mb-2 w-full"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        placeholder="Author"
        className="border p-2 mb-2 w-full"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        value={formData.genre}
        placeholder="Genre"
        className="border p-2 mb-2 w-full"
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="publicationDate"
        value={formData.publicationDate}
        placeholder="Publication Date"
        className="border p-2 mb-2 w-full"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
      >
        {isEdit ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default BookForm;
