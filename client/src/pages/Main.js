import React from 'react'
import {Container} from 'react-bootstrap';
import ArtList from '../components/ArtList';
import TypeBar from '../components/TypeBar';

const Main = () => {
    return (
        <Container>
            <TypeBar />
            <ArtList/>
        </Container>
    );
};

export default Main;