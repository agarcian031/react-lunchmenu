import React, {Component} from 'react';
import './App.css';
import Menu from './components/Menu';
import axios from 'axios';
import {Container, Header} from 'semantic-ui-react'

class App extends Component {
  state = {
    menus: [],

  }

  render() {
  return (
    <Container style={{padding: '20px 0'}}>
      <Header as="h1" textAlign="center">Restaurant App</Header>

      <Menu /> 
      
    </Container>
  );
  }
}

export default App;
