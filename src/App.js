import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './components/NoPage';
import Characters from './components/Characters';
import Houses from './components/Houses';
import Books from './components/Books'
import BookDetail from './components/BookDetail';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="characters" element={<Characters />} />
            <Route path="houses" element={<Houses />} />
            <Route path="books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetail />}/>
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
      </div>
    );
  }
      

export default App;
