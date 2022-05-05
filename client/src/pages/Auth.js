import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'

export default function Auth() {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE


  return (
    <Container 
        className='d-flex justify-content-center align-item-center py-5'
    >
        <Card className='p-3' style={{maxWidth:600, width: document.documentElement.clientWidth}}>
            <Form className='d-flex flex-column'>
                <Form.Group className="mb-3" controlId="login">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="login" placeholder="Введите логин.." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль.." />
                </Form.Group>
                
                <Button className='mt-3' variant={'primary'}>
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </Button>
            </Form>
        </Card>
    </Container>
  )
}
