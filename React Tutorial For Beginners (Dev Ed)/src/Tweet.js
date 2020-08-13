import React from 'react'

export default function Tweet(props) {
    return (
        <div className='Tweet'>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>Likes</h3>
        </div>
    )
}
