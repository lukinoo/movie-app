import { useState,useEffect } from 'react';
import Movies from './components/movies';
import Header from './components/header';
import './css/main.css';
// generate random number for random image page
const randomNumber = Math.floor(Math.random() * 100);
// main api url
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort+by=popilaty.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${randomNumber}`;

function App() {
  const [movies,setMovies] = useState([]);
  const [search,setSearch] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
  }, []);

  return (
    <div className="container">
      <Header setSearch={setSearch} />
      <div className="movies-container">
        {movies.length > 0 && movies.filter((val) => {
          if (search === "") {
            return val
          } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
            return val
          }
        }).map(movie => (
          <Movies key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
