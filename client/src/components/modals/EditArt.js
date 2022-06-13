import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../..'
import { createArt, fetchArtists, fetchOneArt, fetchTypes } from '../../http/artAPI'
import { ART_ROUTE } from '../../utils/consts'

export default observer( function EditArt({show, onHide}) {
  const navigate = useNavigate();
  const {id} = useParams()
  const {art} = useContext(Context)
  const [oldArt, setOldArt] = useState({info: [], artist: []})
  const [name, setName] = useState('')
  const [file, setFile] = useState(null)
  const [about, setAbout] = useState('')
  const [year, setYear] = useState('')
  const [city, setCity] = useState('')
  const [info, setInfo] = useState([])
  const [artistId, setArtistId] = useState([])

  useEffect( () => {
    fetchOneArt(id).then(data => setOldArt(data))
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
    const artists = art.selectedArtist.id
    const formData = new FormData()
    formData.append('name', name)
    formData.append('img', file)
    formData.append('year', `${year}`)
    formData.append('typeId', art.selectedType.id)
    formData.append('artistId', JSON.stringify([artistId]))
    formData.append('about', about)
    formData.append('city', city)
    formData.append('info', JSON.stringify(info))
    // createArt(formData).then(data => {
    //    onHide()
    //    navigate(ART_ROUTE + '/' + data.id)
    //   }
    // )
  }

  setName(oldArt.name)
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
              <div className='d-flex flex-row'>
                <Dropdown className='mt-2 mb-2 me-2'>
                    <Dropdown.Toggle>{art.selectedArtist.name || "художник"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                      {art.artists.map(artist => 
                        <Dropdown.Item 
                        onClick={() => {
                            art.setSelectedArtist(artist)
                            setArtistId(artist.id)
                           }
                         } 
                        key={artist.id}
                        >
                          {artist.name}
                        </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Button
                  className='mt-2 mb-2'
                  onClick={() => {}}
                >
                  +
                </Button>
              </div>
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
                        value={about}
                        onChange={e => setAbout(e.target.value)}
                        className='mt-3'
                        as="textarea" 
                        rows={3}
                        placeholder='описание'
                      />
                      <Form.Control
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className='mt-3'
                  placeholder='Город..'
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
