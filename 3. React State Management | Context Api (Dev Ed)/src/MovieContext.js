import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Hulk',
            price: '$20',
            id: 1231
        },
        {
            name: 'Avengers',
            price: '$30',
            id: 2312
        },
        {
            name: 'Constantine',
            price: '$10',
            id: 4521
        }
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
