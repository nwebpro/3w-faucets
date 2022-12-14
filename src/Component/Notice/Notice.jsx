import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const NoticeWrapper = styled.section`
    background-color: #9b1fe9;
    text-align: center;
    padding: 25px 0px;

    p {
        color: #fff;
        margin-bottom: 0px;
        font-size: 16px;
        font-family: 'Varela Round', sans-serif;
    }
`

const Notice = () => {
    return (
        <NoticeWrapper>
            <Container>
                <p>Notice here</p>
            </Container>
        </NoticeWrapper>
    );
};

export default Notice;