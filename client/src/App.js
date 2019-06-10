import React, {Component} from 'react';
import './App.css';
import MenuList from './components/MenuList';
import MenuForm from './components/MenuForm';
import axios from 'axios';
import {Container, Header} from 'semantic-ui-react'

class App extends Component {
  state = {
    menus: [],
    editing: false, 
    addingItems: false, 
    pickedMenu: null, 
  }

  componentDidMount() {
    axios.get("/api/menus")
    .then(res => {
      this.setState({menus: res.data })
    })
    .catch( error => {
      console.log(error)
    })
  }

  // Add a menu item 
  addMenu = (name) => {
    axios.post("/api/menus", {name: name})
    .then(res => {
      this.setState({menus: [...this.state.menus, res.data]})
    })
  }

  // Update a menu item 
  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
    .then (res => {
      const menus = this.state.map( m => {
        if (m.id === id)
          return res.data 
          return m 
      })
      this.setState({menus, })
    })
  }

  // Delete menu item 
  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const {menus} = this.state; 
      this.setState({menus: menus.filter( m => m.id !== id)})
    })
  }



  render() {
  return (
    <Container style={{padding: '20px 0'}}>
      <Header as="h1" textAlign="center">Restaurant App</Header>
      <br/>
      <MenuForm addMenu={this.addMenu}/> 
      <br/>
      <br/>
      <MenuList menus={this.state.menus} updateMenu={this.updateMenu} deleteMenu={this.deleteMenu} />
    </Container>
  );
  }
}

export default App;
