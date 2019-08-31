import React from "react";
import styled from 'styled-components';

const ColorH2 = styled.h2`
    color: rgb(184, 89, 6);
    font-family: sans-serif;
    font-size: 1.5rem;
`

const FooterWrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    border-top: solid 2px;
    background-color: rgb(247, 205, 168);
    margin-top: 10px;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <ColorH2>Burlutsky Web Solutions  ©2019</ColorH2>
        </FooterWrapper>
    );
};

export default Footer;