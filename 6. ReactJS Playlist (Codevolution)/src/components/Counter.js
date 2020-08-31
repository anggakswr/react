import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Clicked {count} times
            </button>
        </div>
    )
}
