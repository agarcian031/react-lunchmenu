import React, { Component } from 'react'
import {Form} from 'semantic-ui-react'

export class MenuForm extends Component {
  state = {
    name: ""
  }

  handleSubmit = (event) => {
    event.preventDefault(); 
    this.props.addMenu(this.state.name); 
    this.setState({name: ""})
  }

  handleChange = (event) => {
    this.setState({name: event.target.value}); 
  }
  
  render() {
    const {name} = this.state; 
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Menu: "
          placeholder="Add A Menu"
          required 
          value={name}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default MenuForm
