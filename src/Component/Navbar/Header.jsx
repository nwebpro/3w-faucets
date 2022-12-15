import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HeaderWrapper, LogoArea, NavStyle } from './HeaderStyle';

const Header = () => {
    return (
        <NavStyle>
            <Container>
                <HeaderWrapper>
                    <LogoArea>
                        <Link to="/">Faucets</Link>
                    </LogoArea>
                </HeaderWrapper>
            </Container>
        </NavStyle>
    );
};

export default Header;