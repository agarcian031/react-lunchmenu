import React from 'react'
import {Segment, Header, Button, Icon} from 'semantic-ui-react'


const Menu = ({id, name, updateMenu, deleteMenu}) => (
  <Segment padded raised>
    <Header as="h2" style={{ marginLeft: "15px" }}>
          {name}
    </Header>
    <Button.Group>
    <Button icon positive size="tiny" onClick={() => updateMenu(id)}>
      Update Menu
    </Button>
    <Button icon color="red" size="tiny" onClick={() => deleteMenu(id)}>
      Delete Menu <Icon name="trash" />
    </Button>
    </Button.Group>
  </Segment>
)


export default Menu; 

