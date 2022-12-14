import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    text-align: center;
    font-family: "Varela Round",sans-serif;
    padding: 25px 0;
    color: #000;
    border-top: 1px solid #eee;
    font-size: 13px;

    p {
        margin-bottom: 0px;
    }
`
const Footer = () => {
    return (
        <FooterWrapper>
            <p>© copyright 2022 - All Right Reserved by Ab Naeem</p>
        </FooterWrapper>
    );
};

export default Footer;