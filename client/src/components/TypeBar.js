import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = observer(() => {
    const {lot} = useContext(Context)
  return (
    <Nav variant="tabs" defaultActiveKey="0">
        <Nav.Item>
         <Nav.Link eventKey='0'>Все</Nav.Link>
        </Nav.Item>
         { lot.types.map(types =>
        <Nav.Item>
         <Nav.Link eventKey={types.id} key={types.id} onClick={() => lot.setSelectedType(types)}>{types.name}</Nav.Link>
        </Nav.Item>
         )}
  
    </Nav>
    
  )
})

export default TypeBar;