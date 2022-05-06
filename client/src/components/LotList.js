import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import LotItem from './LotItem'

export default observer( function LotList() {
    const {lot} = useContext(Context)
  return (
    <Row className='d-flex pt-2'>
        {lot.lots.map(lot =>
            <LotItem key={lot.id} lot={lot}/>
            )}
    </Row>
  )
}
)