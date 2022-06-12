import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteArt } from '../../http/artAPI'
import { MAIN_ROUTE } from '../../utils/consts'

export default function DeleteArt({show, onHide}) {
  const navigate = useNavigate()
  const {id} = useParams()
  const delArt = () => {
    deleteArt(id).then(data => {
      onHide()
      alert(data.message)
      navigate(MAIN_ROUTE)
     }
    )
  }

  return (
    <Modal
    show={show}
    onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Точно?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button variant="danger" onClick={delArt}>Удалить</Button>
      </Modal.Footer>
    </Modal>
  )
}
