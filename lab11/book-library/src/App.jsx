// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router'
import './App.css'
import {BookProvider} from './contexts/BookContext'
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import EditBookForm from './components/EditBookForm';
import Layout from './components/Layout';

function App() {

  return (
    <BookProvider>
      {/* <Router> */}
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Book</Link>
        </nav> */}
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/books" replace />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/add" element={<AddBookForm />} />
          <Route path="/books/edit/:id" element={<EditBookForm />} />
          </Route>
        </Routes>
      {/* </Router> */}
    </BookProvider>
  );
}

export default App
