import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { createArtist } from '../../http/artistAPI'
import { userInfo } from '../../http/userAPI'
import { ARTIST_ROUTE } from '../../utils/consts'

export default observer( function CreateArt({show, onHide}) {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [file, setFile] = useState(null)
  const [bio, setBio] = useState('')
  const userId = userInfo().id

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addArtist = () => {
     const formData = new FormData()
    formData.append('name', name)
    formData.append('img', file)
    formData.append('bio', bio)
    formData.append('userId', userId)   
    createArtist(formData).then(data => {
       onHide()
       navigate(ARTIST_ROUTE + '/' + data.id)
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
          Добавить художника
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>

                <Form.Control
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className='mt-3'
                  placeholder='Введите имя..'
                />
                 <Form.Control
                        value={bio}
                        onChange={e => setBio(e.target.value)}
                        className='mt-3'
                        as="textarea" 
                        rows={3}
                        placeholder='Биография'
                      />
                                     
                <Form.Control
                  className='mt-3'
                  type='file'
                  onChange={selectFile}
                />
                
               
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={addArtist}>Создать</Button>
      </Modal.Footer>
    </Modal>
  )
})
