import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateArt from '../components/modals/CreateArt'

export default function Admin() {
  const [artVisible, setArtVisible] = useState(false)
  const [artistVisible, setArtistVisible] = useState(false)
  return (
    <Container
    className='d-flex justify-content-center align-item-center py-5'
    >
      <div className="d-grid gap-2">
  <Button variant="outline-dark" onClick={() => setArtVisible(true)}>
    Добавить арт
  </Button>
  <Button variant="outline-dark" onClick={() => setArtistVisible(true)}>
    Добавить художника
  </Button>
  <CreateArt show={artVisible} onHide={() => setArtVisible(false)}/>
  <CreateArt show={artistVisible} onHide={() => setArtistVisible(false)}/>
</div>
    </Container>
  )
}
