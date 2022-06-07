import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = observer(() => {
    const {art} = useContext(Context)
  return (
    <Nav variant="pills" defaultActiveKey="0" className='mt-2 md-2'>
        <Nav.Item>
         <Nav.Link eventKey='0' key="0" onClick={() => art.setSelectedType(0)}>Все</Nav.Link>
        </Nav.Item>
         { art.types.map(type =>
        <Nav.Item >
         <Nav.Link eventKey={type.id} key={type.id} onClick={() => art.setSelectedType(type)}>{type.name}</Nav.Link>
        </Nav.Item>
         )}
  
    </Nav>
    
  )
})

export default TypeBar;