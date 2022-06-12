import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import {Container} from 'react-bootstrap';
import { Context } from '..';
import ArtList from '../components/ArtList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import { fetchArts, fetchTypes } from '../http/artAPI';

const Main = observer( () => {
    const {art} = useContext(Context)


    useEffect( () => {
        fetchTypes().then(data => art.setTypes(data))
        fetchArts(art.selectedType.id, null, art.page, 3).then(data => {
            art.setArts(data.rows)
            art.setTotalCount(data.count)
        })
    }, [art.selectedType, null, art.page])

    return (
        <Container>
            <TypeBar />
            <ArtList/>
            <Pages/>
        </Container>
    );
});

export default Main;