import { Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import BookSearch from './components/BookSearch';
import BookListResults from './components/BookListResults';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/add-book" element={<BookForm />} />
      </Routes>
    </div>
  );
};

export default App;
