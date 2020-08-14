import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CharDetail({ match }) {
    useEffect(() => {
        fetchItem()
    }, [])

    const [item, setItem] = useState({})

    async function fetchItem() {
        const fetchItem = await fetch(`http://api.jikan.moe/v3/character/${match.params.id}`)
        const item = await fetchItem.json()
        setItem(item)
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image_url} alt={item.name} />
        </div>
    );
}
