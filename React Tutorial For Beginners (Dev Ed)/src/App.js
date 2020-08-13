import React, { useState } from 'react'
import Hello from './sayHello'
import Tweet from './Tweet'
import './App.css'

export default function App() {
  const [users, setUsers] = useState([
    { name: 'Angga', message: 'Hi there' },
    { name: 'Jere', message: 'I am Jere' },
    { name: 'Angel', message: 'Buy my tiens' }
  ])

  return (
    <div className="App">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  )
}
