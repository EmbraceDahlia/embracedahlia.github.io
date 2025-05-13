import React from 'react';
import { useBookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router';
import '../css/BookList.css'

const BookList = () => {
    const { books, deleteBook, loading, error } = useBookContext();
    const navigate = useNavigate();

    if (loading) return <p>Loading books...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="book-grid">
            {books.map((book) => (
                <div  key={book.id} className="book-card">
                    <div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-author">by {book.author}</div>
                    </div>
                    <div className="button-group">
                        <button
                            className="action-button edit"
                            onClick={() => navigate(`/books/edit/${book.id}`)}
                        >
                            Edit
                        </button>
                        <button
                            className="action-button delete"
                            onClick={() => deleteBook(book.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default BookList;
