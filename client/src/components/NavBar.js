import React, { useContext } from 'react'
import { Context } from '../index'
import { ADMIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import {observer} from "mobx-react-lite"
import {Navbar, Container, Nav} from 'react-bootstrap'

const NavBar = observer( () => {
    const {user} = useContext(Context)
  return (
    <Navbar bg="light" variant="light" >
    <Container>
    <Navbar.Brand href={MAIN_ROUTE}>
    <img
        src="/logo330x100.png"
        width="132"
        height="40"
        className="d-inline-block align-top"
        alt="Avier"
      />
    </Navbar.Brand>

    {user.isAuth ?
        <Nav className="ml-auto">
            <Nav.Link href={ADMIN_ROUTE}>Админ панель</Nav.Link>
            <Nav.Link onClick={() => user.setIsAuth(false)}>Выйти</Nav.Link>
        </Nav>
      :
        <Nav className="ml-auto">
            <Nav.Link href={REGISTRATION_ROUTE}>Регистрация</Nav.Link>
            <Nav.Link onClick={() => user.setIsAuth(true)}>Войти</Nav.Link>
        </Nav>
    }
    </Container>
  </Navbar>
            
  )
}) 

export default NavBar;
