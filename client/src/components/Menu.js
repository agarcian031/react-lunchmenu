import React, {Component } from 'react'
import axios from 'axios'
import ItemsList from './ItemsList'
import {Segment, Header, Button, Icon, Card} from 'semantic-ui-react'


// const Menu = ({id, name, updateMenu, deleteMenu}) => (
//   <Segment padded raised>
//     <Header as="h2" style={{ marginLeft: "15px" }}>
//           {name}
//     </Header>
//     <Button.Group>
//     <Button size="tiny" onClick={() => updateMenu(id)}>
//       Display Menu
//     </Button>
//     <Button positive size="tiny" onClick={() => updateMenu(id)}>
//       Update Menu
//     </Button>
//     <Button icon color="red" size="tiny" onClick={() => deleteMenu(id)}>
//       Delete Menu <Icon name="trash" />
//     </Button>
//     </Button.Group>
//   </Segment>
// )


// export default Menu; 

export class Menu extends Component {
  state = {
    items: [
      {name: "Pizza", price: "$2.00"}
    ]
  }

  // will make an api call to get the items from each menu 
  componentDidMount() {
    let {id} = this.props
    axios.get(`/api/menus/${id}/items`)
    .then(res => {
        this.setState({
            items: res.data
        })
    })
}
  render() {
    const {name, id, updateMenu, deleteMenu} = this.props 
    const {items} = this.state;

    return (
      <Segment padded raised>
      <Header as="h2" style={{ marginLeft: "15px" }}>
            {name}
      </Header>
      <ItemsList items={items}/>
      <Button.Group>
      <Button size="tiny" onClick={() => updateMenu(id)}>
        Display Menu
      </Button>
      <Button positive size="tiny" onClick={() => updateMenu(id)}>
        Update Menu
      </Button>
      <Button icon color="red" size="tiny" onClick={() => deleteMenu(id)}>
        Delete Menu <Icon name="trash" />
      </Button>
      </Button.Group>
    </Segment>
    )
  }
}

export default Menu


