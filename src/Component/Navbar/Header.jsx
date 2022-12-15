import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { HeaderWrapper, LogoArea } from './HeaderStyle';

const Header = () => {
    return (
        <Navbar>
            <Container>
                <HeaderWrapper>
                    <LogoArea>
                        <a href="">Faucets</a>
                    </LogoArea>
                </HeaderWrapper>
            </Container>
        </Navbar>
    );
};

export default Header;