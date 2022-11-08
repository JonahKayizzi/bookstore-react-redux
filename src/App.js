import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
/*
import store from './redux/configureStore';
import { addBook, deleteBook } from './redux/books/books';
import { checkCategoryStatus } from './redux/categories/categories';

store.dispatch(addBook({ id: 1, title: 'The End', author: 'Michael' }));
store.dispatch(addBook({ id: 2, title: 'Microverse', author: 'Ariel' }));
console.log(store.getState());
store.dispatch(deleteBook({ id: 1 }));
console.log(store.getState());
store.dispatch(checkCategoryStatus(2));
console.log(store.getState());
*/
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
