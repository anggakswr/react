import React from 'react'
import Nav from './Nav'
import MovieList from './MovieList'
import { MovieProvider } from './MovieContext'
import './App.css'

export default function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}