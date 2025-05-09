import { useState } from "react";
import { useBookContext } from "../contexts/BookContext";

const EditBookForm = ({ book, onUpdateSuccess }) => {
  const { updateBook } = useBookContext();
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Title is required');
      return;
    }
    if (!author.trim()) {
      alert('Author is required');
      return;
    }

    // Call updateBook function
    await updateBook(book.id, { title, author });

    // Notify parent to close edit form and update the list
    onUpdateSuccess();
  };

  return (
    <div style={cardStyle}> {/* Wrap the form in card-like styling */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="title" style={labelStyle}>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="author" style={labelStyle}>Author</label>
          <input
            type="text"
            id="author"
            value={author}
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Update Book</button>
      </form>
    </div>
  );
};

const formStyle = { marginBottom: '20px' };
const inputStyle = { padding: '5px' };
const buttonStyle = { padding: '5px 10px', marginTop: '10px' };

const cardStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  width: '200px',
  borderRadius: '5px',
};

const labelStyle = {
  fontSize: '14px',
  marginBottom: '5px',
};

export default EditBookForm;
