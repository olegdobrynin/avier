import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import ArtistList from '../components/ArtistList'
import CreateArt from '../components/modals/CreateArt'
import CreateArtist from '../components/modals/CreateArtist'
import { fetchInfo } from '../http/userAPI';

export default function Admin() {
  const [artVisible, setArtVisible] = useState(false)
  const [artistVisible, setArtistVisible] = useState(false)
  const {user} = useContext(Context)

  useEffect(() => {
    fetchInfo(user.userInfo.id).then(data => {
      user.setArtists(data.artists)
    })
  }, [])
  

  return (
    <Container
    className='py-5'
    >
      <Row className='px-5'>
        <ArtistList />
      </Row>
      
      <Row>
      <div className="d-flex justify-content-center align-item-center d-grid gap-2">
  <Button variant="outline-dark" onClick={() => setArtVisible(true)}>
    Добавить арт
  </Button>
  <Button variant="outline-dark" onClick={() => setArtistVisible(true)}>
    Добавить художника
  </Button>
  <CreateArt show={artVisible} onHide={() => setArtVisible(false)}/>
  <CreateArtist show={artistVisible} onHide={() => setArtistVisible(false)}/>
</div>
      </Row>
      
    </Container>
  )
}
