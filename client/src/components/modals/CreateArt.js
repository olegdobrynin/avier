import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'
import { fetchArtists, fetchTypes } from '../../http/artAPI'

export default observer( function CreateArt({show, onHide}) {
  const {art} = useContext(Context)
  const [name, setName] = useState('')
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])
  const [about, setAbout] = useState('')
  const [year, setYear] = useState('')

  useEffect( () => {
    fetchTypes().then(data => art.setTypes(data))
    fetchArtists().then(data => art.setArtists(data))
}, [])


  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addArt = () => {
    console.log(info)
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
          Добавить объект
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
                <Dropdown className='mt-2 mb-2'>
                    <Dropdown.Toggle>{art.selectedArtist.name || "художник"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      {art.artists.map(artist => 
                        <Dropdown.Item 
                        onClick={() => art.setSelectedArtist(artist)} 
                        key={artist.id}
                        >
                          {artist.name}
                        </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                
                <Dropdown className='mt-2 mb-2'>
                    <Dropdown.Toggle>{art.selectedType.name || "тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      {art.types.map(type => 
                        <Dropdown.Item 
                        onClick={() => art.setSelectedType(type)} 
                        key={type.id}
                        >
                          {type.name}
                        </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Control
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className='mt-3'
                  placeholder='Введите название..'
                />
                <Form.Control
                  value={year}
                  onChange={e => {
                    if (e.target.value.length <=4) { 
                      setYear(e.target.value)
                    } else { return }
                }}
                  className='mt-3'
                  placeholder='год'
                  type="number"
                  min="1"
                  max="2022"
                  maxLength="4"
                />
                 <Form.Control
                        value={about}
                        onChange={e => setAbout(e.target.value)}
                        className='mt-3'
                        as="textarea" 
                        rows={3}
                        placeholder='описание'
                      />
                <Form.Control
                  className='mt-3'
                  type='file'
                  onChange={selectFile}
                />
                
                <hr/>
                
                {info.map(i =>
                  <Row className='mt-3' key={i.number}>
                    <Col md={4}>
                      <Form.Control
                        value={i.title}
                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                        placeholder='название свойства'
                      />
                    </Col>
                    <Col md={4}>
                      <Form.Control
                        value={i.description}
                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                        placeholder='описание'
                      />
                    </Col>
                    <Col md={4}>
                      <Button 
                        variant={"outline-danger"}
                        onClick={() => removeInfo(i.number)}
                      >
                        Удалить
                      </Button>
                    </Col>
                  </Row>
                  )}
                  <Button
                  className='mt-3'
                  variant={'outline-dark'}
                  onClick={addInfo}
                >
                  Добавить свойство
                </Button>
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={addArt}>Сохранить</Button>
      </Modal.Footer>
    </Modal>
  )
})
