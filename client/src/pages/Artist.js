import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import DeleteArtist from '../components/modals/DeleteArtist'
import EditArtist from '../components/modals/EditArtist'
import { fetchOneArtist } from '../http/artAPI'

export default observer( function ArtPage() {
    const [artist, setArtist] = useState({})
    const {id} = useParams()
    const img = process.env.REACT_APP_API_URL + "artists/" + artist.img;
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    
    useEffect(() => {
        fetchOneArtist(id).then(data => setArtist(data))
    }, [])

  return (
    <Container className='mt-3'>
        <Row>
            <Col md={8}>
                <Image className="w-100" src={img}/>     
            </Col>
            <Col md={4}>
                <Row><h2>{artist.name}</h2></Row>    
                <Row><h6>{artist.bio}</h6></Row>
                <Button
                        className='mt-2 mb-2'
                        variant="outline-danger" 
                        onClick={() => setDeleteVisible(true)}
                        >
                        Удалить
                    </Button>
                    <Button
                        className='mt-2 mb-2'
                        variant="outline-dark" 
                        onClick={() => setEditVisible(true)}
                        >
                        Редактировать
                    </Button>
            </Col>
        </Row>
        {/* <DeleteArtist show={deleteVisible} onHide={() => setDeleteVisible(false)}/> */}
        <EditArtist show={editVisible} onHide={() => setEditVisible(false)}/>
    </Container>
  )
})
