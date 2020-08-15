import React, { useState, useEffect } from 'react'
import Movie from './Movie'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('hulk')

  const apikey = '181b9517'
  const req = `http://www.omdbapi.com/?apikey=${apikey}&s=${query}`

  // getMovies akan berjalan stlh halaman di render
  useEffect(() => {
    getMovies()
  }, [query])

  // ambil data api
  async function getMovies() {
    const response = await fetch(req)
    const data = await response.json()
    setMovies(data.Search)
  }

  // spy isi input mengikuti yg kita ketik
  function updateSearch(e) {
    setSearch(e.target.value)
  }

  // mengirim data yg diinput di form
  function getSearch(e) {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Search</button>
      </form>

      <div className="movies">
        {movies.map(movie => (
          <Movie key={movie.imdbID} title={movie.Title} poster={movie.Poster} />
        ))}
      </div>
    </div>
  )
}

export default App
