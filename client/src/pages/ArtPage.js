import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneArt } from '../http/artAPI'
import { ARTIST_ROUTE } from '../utils/consts'

export default observer( function ArtPage() {
    const navigate = useNavigate()
    const [art, setArt] = useState({info: [], artist: []})
    const {id} = useParams()

     useEffect(() => {
         fetchOneArt(id).then(data => setArt(data))
         
    }, [])
    const img = process.env.REACT_APP_API_URL + art.img;

  return (
    <Container className='mt-3'>
        <Row>
            <Col md={8}>
                <Image className="w-100" src={img}/>     
            </Col>
            <Col md={4}>
                <Row>
                        {art.artist.map(artist => 
                            <Row key={artist.id} onClick={() => navigate(ARTIST_ROUTE + '/' + artist.id)}>
                                <h6>{artist.name}</h6>
                            </Row>
                        )}    
                </Row>              

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
