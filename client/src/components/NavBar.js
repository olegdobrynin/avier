import React, { useContext } from 'react'
import { Context } from '../index'
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import {observer} from "mobx-react-lite"
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NavBar = observer( () => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const {art} = useContext(Context)
    art.setSelectedType(0)
    
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.setItem('token', '')
    }

    const logo = () => {
      art.setSelectedType(0)
      navigate(MAIN_ROUTE)
    }

  return (
    <Navbar bg="light" variant="light" >
    <Container>
    <Navbar.Brand onClick={() => logo() }>
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

            <NavDropdown
            id="nav-dropdown"
            title={user.userInfo.login}
            menuVariant="white"
          >
            <NavDropdown.Item onClick={() => navigate(ADMIN_ROUTE)}>Admin</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => logOut()}>Выйти</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      :
        <Nav className="ml-auto">
            <Nav.Link onClick={() => navigate(REGISTRATION_ROUTE)}>Регистрация</Nav.Link>
            <Nav.Link onClick={() => navigate(LOGIN_ROUTE)}>Войти</Nav.Link>
        </Nav>
    }
    </Container>
  </Navbar>
            
  )
}) 

export default NavBar;
