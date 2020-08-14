import React, { useState, useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

export default function MovieList() {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    )
}
