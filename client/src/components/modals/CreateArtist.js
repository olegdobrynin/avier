import React, { useContext, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'

export default function CreateArtist({show, onHide}) {
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
