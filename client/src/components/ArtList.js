import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import ArtItem from './ArtItem'

export default observer( function ArtList() {
    const {art} = useContext(Context)
  return (
    <Row className='d-flex pt-2'>
        {art.arts.map(art =>
            <ArtItem key={art.id} art={art}/>
            )}
    </Row>
  )
}
)