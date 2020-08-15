import React from 'react'

export default function Movie({ title, poster }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={poster} alt={title} />
        </div>
    )
}
