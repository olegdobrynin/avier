import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import {Container} from 'react-bootstrap';
import { Context } from '..';
import ArtList from '../components/ArtList';
import TypeBar from '../components/TypeBar';
import { fetchTypes } from '../http/artAPI';

const Main = observer( () => {
    const {art} = useContext(Context)

    useEffect( () => {
        fetchTypes().then(data => art.setTypes(data))
    }, [])
    return (
        <Container>
            <TypeBar />
            <ArtList/>
        </Container>
    );
});

export default Main;