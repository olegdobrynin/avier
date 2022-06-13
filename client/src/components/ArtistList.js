import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import ArtistCard from './ArtistCard'

export default observer( function ArtistList() {
    const {user} = useContext(Context)
  return (
    <Row className='d-flex pt-2'>
        {user.artists.map(artist =>
            <ArtistCard key={artist.id} artist={artist}/>
            )}
    </Row>
  )
}
)