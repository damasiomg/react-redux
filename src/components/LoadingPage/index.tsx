import React from 'react';
import { Container } from './styles';
import LoadingVector from '../../assets/preloader.svg';

const LoadingPage: React.FC = () => {
    return (
        <>
            <Container>
                <img width="40" src={LoadingVector} alt="Loading..."/>
            </Container>
        </>
    )
}

export default LoadingPage;