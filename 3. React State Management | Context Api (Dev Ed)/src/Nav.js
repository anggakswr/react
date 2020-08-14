import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <nav>
            <h3>Angel</h3>
            <p>List of movies: {movies.length}</p>
        </nav>
    )
}
