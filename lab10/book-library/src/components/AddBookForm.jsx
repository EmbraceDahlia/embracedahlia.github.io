import { useState } from 'react';
import { useBookContext } from '../contexts/BookContext';

const AddBookForm = () => {
  const { addBook } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Title is required');
      return;
    }
    if (!author.trim()) {
      alert('Author is required');
      return;
    }

    addBook({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} required style={inputStyle}/>
      <input type="text" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required style={inputStyle}/>
      <button type="submit" style={buttonStyle}>Add Book</button>
    </form>
  );
};

const formStyle = { marginBottom: '20px' };
const inputStyle = { marginRight: '10px', padding: '5px' };
const buttonStyle = { padding: '5px 10px' };

export default AddBookForm;
