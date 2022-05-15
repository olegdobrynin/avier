import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function ArtPage() {
    const art =  {id: 1, name: 'Утро в сосновом лесу', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Shishkin%2C_Ivan_-_Morning_in_a_Pine_Forest.jpg/1280px-Shishkin%2C_Ivan_-_Morning_in_a_Pine_Forest.jpg', typeId: '2'}
    
  return (
    <Container>
        <Row>
            <Col md={8}>
                <Image className="w-100" src={art.img}/>     
            </Col>
            <Col md={4}>
                <Row><h2>{art.name}</h2></Row>    
                <Row>{art.id}</Row> 
            </Col>
        </Row>
        
    </Container>
    
  )
}
