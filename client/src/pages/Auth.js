import { observer } from 'mobx-react-lite'
import React , { useContext, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { Context } from '..'
import { auth, registration } from '../http/userAPI'
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts'

export default observer( function Auth() {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await auth(login, password);
            } else {
                data = await registration(login, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

  return (
    <Container 
        className='d-flex justify-content-center align-item-center py-5'
    >
        <Card className='p-3' style={{maxWidth:600, width: document.documentElement.clientWidth}}>
            <Form className='d-flex flex-column'>
                <Form.Group className="mb-3" controlId="login">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="login" placeholder="Введите логин.." value={login} onChange={e => setLogin(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль.." value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                
                <Button className='mt-3' variant={'primary'} onClick={click}>
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </Button>
            </Form>
        </Card>
    </Container>
  )
})
