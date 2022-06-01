import React, { useContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Context } from '..'
import CreateArt from '../components/modals/CreateArt'
import CreateArtist from '../components/modals/CreateArtist'


export default function Admin() {
  const [artVisible, setArtVisible] = useState(false)
  const [artistVisible, setArtistVisible] = useState(false)
  const {art} = useContext(Context)

 
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
  <CreateArtist show={artistVisible} onHide={() => setArtistVisible(false)}/>
</div>
    </Container>
  )
}
