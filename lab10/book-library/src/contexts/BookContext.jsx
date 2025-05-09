import React, { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = 'https://67d17ef590e0670699ba5929.mockapi.io/books';

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    setLoading(true);
    try {
      const response = await fetch(api);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }

  async function addBook(book) {
    try {
      const res = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
      });
      const newBook = await res.json();
      setBooks((prev) => [...prev, newBook]);
    } catch (err) {
      setError(err.message)
    }
  }

  const updateBook = async (id, updatedBook) => {
    try {
      const res = await fetch(`${api}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBook)
      });
      const data = await res.json();
      setBooks((prev) => prev.map((b) => (b.id === id ? data : b)));
    } catch (err) {
      setError(err.message);
    }
  };
  
  const deleteBook = async(id) => {
    try{
      await fetch(`${api}/${id}`,{
        method: 'DELETE'
      });
      setBooks((prev)=>prev.filter((b)=>b.id!==id));
    }catch(err){
      setError(err.message);
    }
  };

  return (
    <BookContext.Provider value={{ books, loading, error, addBook, updateBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
