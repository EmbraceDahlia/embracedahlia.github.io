import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useBookContext } from '../contexts/BookContext';

const EditBookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, updateBook } = useBookContext();

  const book = books.find((b) => b.id.toString() === id);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [book]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      alert('Both Title and Author are required.');
      return;
    }

    await updateBook(book.id, { title, author });
    navigate('/books'); // Redirect after successful update
  };

  if (!book) return <p>Book not found.</p>;

  return (
    <div style={containerStyle}>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="title" style={labelStyle}>Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyle}
            placeholder="Enter book title"
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="author" style={labelStyle}>Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={inputStyle}
            placeholder="Enter author name"
          />
        </div>

        <button type="submit" style={buttonStyle}>Update Book</button>
      </form>
    </div>
  );
};

const containerStyle = {
  width: '300px',
  margin: '40px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  fontSize: '14px',
  marginBottom: '5px',
  display: 'block',
  textAlign: 'left',
};


const inputStyle = {
  padding: '8px',
  width: '100%',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  textAlign: 'left', 
  boxSizing: 'border-box', 
};


const buttonStyle = {
  padding: '10px 15px',
  fontSize: '1rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};



export default EditBookForm;
