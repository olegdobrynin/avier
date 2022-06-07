import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneArt } from '../http/artAPI'

export default observer( function ArtPage() {
    const [art, setArt] = useState({info: []})
    const {id} = useParams()
     useEffect(() => {
         fetchOneArt(id).then(data => setArt(data))
    }, [])
    const img = process.env.REACT_APP_API_URL + art.img;
    console.log(art)
  return (
    <Container className='mt-3'>
        <Row>
            <Col md={8}>
                <Image className="w-100" src={img}/>     
            </Col>
            <Col md={4}>
                <Row><h2>{art.name}</h2></Row>    
                <Row><h6>{art.about}</h6></Row>
                <Row><h5>{art.city}</h5></Row> 
                <Row><h5>{art.year}</h5></Row>
                <Row>
                    {art.info.map(info => 
                            <Row key={info.id}>
                                <h6>{info.title}: {info.description}</h6>
                            </Row>
                        )}    
                </Row>
            </Col>
        </Row>
        
    </Container>
    
  )
})
