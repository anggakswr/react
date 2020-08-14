import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Char() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    async function fetchItems() {
        const data = await fetch('http://api.jikan.moe/v3/manga/1/characters')
        const items = await data.json()
        setItems(items.characters)
    }

    return (
        <div>
            {items.map(item => (
                <h1 key={item.mal_id}>
                    <Link to={`/char/${item.mal_id}`}>
                        {item.name}
                    </Link>
                </h1>
            ))}
        </div>
    );
}
