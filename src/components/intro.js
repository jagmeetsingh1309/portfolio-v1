import React from 'react';
import styled from 'styled-components';

import { 
    Heading1,
    Heading2, 
    CyanText, 
    Paragraph 
} from './Typography';


const Wrapper = styled.div`
    height: 100vh;
`;

const ButtonLink = styled.a`
    display: block;
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    color: ${ ({ theme: { colors } }) => colors.secondaryColor };
    border: 1px solid ${ ({ theme: { colors } }) => colors.secondaryColor };
    outline: none;
    background: transparent;
    width: 5%;
    text-decoration: none;
    &:hover{
        cursor: pointer;
    }
    @media(max-width:500px){
        width: 15%;
    }
`;

const Intro = () => {
    return (
        <Wrapper>
            <h2 style={{ margin: 0, paddingTop: '1rem' }}><CyanText>Hi, my name is</CyanText></h2>
            <Heading1>Jagmeet Singh.</Heading1>
            <Heading2>I build things for the web.</Heading2>
            <Paragraph width="40%">
                I'm a Full Stack Web Developer based in New Delhi, currently 
                pursuing my B.Tech in Computer Science from Guru Tegh Bahadur Institute
                of technology affiliated to IPU.
            </Paragraph>
            <ButtonLink href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank">Resume</ButtonLink>
        </Wrapper>
    )
}

export default Intro;