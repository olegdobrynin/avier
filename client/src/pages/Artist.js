import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneArtist } from '../http/artAPI'

export default observer( function ArtPage() {
    const [artist, setArtist] = useState({})
    const {id} = useParams()
    const img = process.env.REACT_APP_API_URL + artist.img;

    useEffect(() => {
        fetchOneArtist(id).then(data => setArtist(data))
    }, [])
    console.log(artist.name)
  return (
    <Container className='mt-3'>
        <Row>
            <Col md={8}>
                <Image className="w-100" src={img}/>     
            </Col>
            <Col md={4}>
                <Row><h2>{artist.name}</h2></Row>    
                <Row><h6>{artist.bio}</h6></Row>
            </Col>
        </Row>
    </Container>
    
  )
})
