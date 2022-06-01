import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Card, Col, Image } from 'react-bootstrap'
import { ART_ROUTE } from '../utils/consts'

export default function artItem({art}) {
    const navigate = useNavigate()
  return (
    <Col md={3} onClick={() => navigate(ART_ROUTE + '/' + art.id)}>
        <Card style={{cursor: 'pointer'}} border={"light"} className="mb-3 w-100">
            <Image className="w-100" src={process.env.REACT_APP_API_URL + art.img}/>
            <div className='d-flex justify-content-center align-items-center'>
                <div>{art.name}</div>
            </div>
        </Card>

    </Col>
  )
}
