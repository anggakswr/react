import React from 'react'

function About() {
    return (
        <React.Fragment>
            <h1 style={pad10}>About</h1>
            <p style={pad10}>TodoList app v0.1.0. Hasil belajar dari React JS Crash Course di Traversy Media.</p>
        </React.Fragment>
    )
}

const pad10 = {
    padding: '10px'
}

export default About