import './App.css'
import { BookProvider } from './contexts/BookContext';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

function App() {

  return (
    <BookProvider>
      <div className="App">
        <h1>Book Library</h1>
        <AddBookForm />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App
