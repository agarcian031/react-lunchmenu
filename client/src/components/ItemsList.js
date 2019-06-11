import React from 'react'
import Item from './Item'

const ItemsList = ({items}) => {
  return (
    <div>
      {items.map((item) => <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default ItemsList
