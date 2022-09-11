import { Route, Routes } from 'react-router-dom';
import './App.css';
import FilmList from './components/films/Film-list';
import Header from './components/header/Header';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FilmList />} />
        <Route path="users" element={<h1>Users</h1>} />
      </Routes>
    </>
  );
}

export default App;
