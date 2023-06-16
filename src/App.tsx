import { useEffect, useState, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './ui/Header';
import { Home } from './ui/Home';
import { Footer } from './ui/Footer/Footer';

import styles from './App.module.css';
import { orderDataByReleaseYear } from './util';
import { fetchMovies } from './application/fetchMovies';

function App() {
  const [data, setData] = useState({ total: 0, entries: [] });
  const [filteredData, setFilteredData] = useState({ total: 0, entries: [] });
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    async function fetchData() {
      const movies = await fetchMovies();
      orderDataByReleaseYear(movies.entries);
      setData(movies);
      setFilteredData(movies);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const newData = data.entries.filter((movie: { title: string }) =>
      movie.title.toLowerCase().includes(filterText.toLowerCase())
    );

    const dataFiltered = { entries: newData, total: newData.length };
    setFilteredData(dataFiltered);
  }, [filterText]);

  return (
    <Router>
      <div className={styles.App}>
        <Header filterText={filterText} setFilterText={setFilterText} />
        {filteredData.entries && (
          <Home data={filteredData.entries} total={filteredData.total} />
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
