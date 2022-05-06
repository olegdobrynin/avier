import React from 'react'
import {Container} from 'react-bootstrap';
import LotList from '../components/LotList';
import TypeBar from '../components/TypeBar';

const Main = () => {
    return (
        <Container>
            <TypeBar />
            <LotList/>
        </Container>
    );
};

export default Main;