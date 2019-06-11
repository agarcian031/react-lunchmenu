import React from 'react'
import {Segment, Header, Button, Icon, Card} from 'semantic-ui-react'


const Item = ({name, id, price}) => {

  return (
    <Segment padded raised>
    <Header as="h4">
          {name}
    </Header>
    <p>{price}</p>
    <Button.Group size="tiny">
    <Button icon positive size="tiny">
      <Icon name="pencil"/>
    </Button>
    <Button icon color="red" size="tiny" >
      <Icon name="trash" />
    </Button>
    </Button.Group>
  </Segment>
  )
}

export default Item
