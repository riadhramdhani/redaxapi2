import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { delete_data } from '../redux/action/action';

function Produitcart({el}) {
    const dispatch=useDispatch()
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.imageUrl} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {el.namee}
        </Card.Text>
        {el.body}
      </Card.Body>
      <Button onClick={()=>dispatch(delete_data(el.id))}>delete</Button>
      
    </Card>
    </div>
  )
}

export default Produitcart