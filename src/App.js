import React, { Component } from 'react'
import AppRoutes from './routes'
import './App.css'
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Random Drinks</h1>
        </header>
        <br />
        <Container>
          <AppRoutes />
        </Container>        
      </div>
    )
  }
}

export default App
