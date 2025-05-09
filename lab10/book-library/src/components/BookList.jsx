import React, { useState } from 'react';
import { useBookContext } from '../contexts/BookContext';
import EditBookForm from './EditBookForm';

const BookList = () => {
    const { books, deleteBook, loading, error } = useBookContext();
    const [editingId, setEditingId] = useState(null);

    if (loading) return <p>Loading books...</p>;
    if (error) return <p>{error}</p>;
    const handleUpdateSuccess = () => {
        setEditingId(null);
    };

    return (
        <div style={gridStyle}>
            {books.map((book) =>
                editingId === book.id ? (
                    <EditBookForm
                        key={book.id}
                        book={book}
                        onUpdateSuccess={handleUpdateSuccess}
                    />
                ) : (
                    <div key={book.id} style={cardStyle}>
                        <div>
                        <h3>{book.title}</h3>
                        </div>
                        <p>by {book.author}</p>
                        <div style={iconContainerStyle}>
                            <button
                                onClick={() => setEditingId(book.id)}
                                style={{ ...iconButtonStyle, color: '#007bff' }}
                                title="Edit"
                            >
                                ✎
                            </button>
                            <button
                                onClick={() => deleteBook(book.id)}
                                style={{ ...iconButtonStyle, color: '#dc3545' }}
                                title="Delete"
                            >
                                🗑
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent:'center'
};

const cardStyle = {
    position: 'relative',
    border: '1px solid #ccc',
    padding: '15px',
    width: '250px',
    borderRadius: '5px',
    boxSizing: 'border-box',
    overflow: 'hidden'
};

const iconContainerStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  display: 'flex',
  gap: '8px',
};

const iconButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.1rem',
  padding: '2px',
};
const titleStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};


export default BookList;
