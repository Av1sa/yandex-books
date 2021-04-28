import './App.css';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import BookList from '../BookList/BookList';
import Preloader from '../Preloader/Preloader';
import Modal from '../Modal/Modal';
import { NOTHING_FOUND, SEARCH_ERROR } from '../../utils/const';

function App() {
  const nothingFound = useSelector((state) => state.nothingFound);
  const found = useSelector((state) => state.found);
  const isLoading = useSelector((state) => state.isLoading);
  
  return (
    <div className="app">
      <Header />
      {found && <BookList />}
      {isLoading && <Preloader />}
      {nothingFound === 'no-results' && (
        <p className="app__text">{NOTHING_FOUND}</p>
      )}
      {nothingFound === 'error' && <p className="app__text">{SEARCH_ERROR}</p>}
      <Modal />
    </div>
  );
}

export default App;
