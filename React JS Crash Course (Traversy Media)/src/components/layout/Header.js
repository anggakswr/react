import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={link} to="/">Home</Link> | <Link style={link} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const link = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header