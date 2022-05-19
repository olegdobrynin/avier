import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function CreateArt({show, onHide}) {
  return (
    <Modal
    show={show}
    onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить объект
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
                <Form.Control
                    placeholder={'Введите название типа'}
                />
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={onHide}>Сохранить</Button>
      </Modal.Footer>
    </Modal>
  )
}
