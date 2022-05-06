import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Card, Col, Image } from 'react-bootstrap'
import { LOT_ROUTE } from '../utils/consts'

export default function lotItem({lot}) {
    const navigate = useNavigate()
  return (
    <Col md={3} onClick={() => navigate(LOT_ROUTE + '/' + lot.id)}>
        <Card style={{cursor: 'pointer'}} border={"light"} className="mb-3 w-100">
            <Image className="w-100" src={lot.img}/>
            <div className='d-flex justify-content-center align-items-center'>
                <div>{lot.name}</div>
            </div>
        </Card>

    </Col>
  )
}
