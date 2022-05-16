import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneArt } from '../http/artAPI'

export default function ArtPage() {
    const [art, setArt] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneArt(id).then(data => setArt(data))
    })
  return (
    <Container>
        <Row>
            <Col md={8}>
                <Image className="w-100" src={process.env.REACT_APP_API_URL + art.img}/>     
            </Col>
            <Col md={4}>
                <Row><h2>{art.name}</h2></Row>    
                <Row>{art.id}</Row> 
            </Col>
        </Row>
        
    </Container>
    
  )
}
