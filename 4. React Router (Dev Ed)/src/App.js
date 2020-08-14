import React from 'react'
import Nav from './Nav'
import About from './About'
import Char from './Char'
import CharDetail from './CharDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/char" exact component={Char} />
          <Route path="/char/:id" component={CharDetail} />
        </Switch>
      </div>
    </Router>
  )
}
