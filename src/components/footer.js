import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    color: ${ ({ theme: { colors } }) => colors.primaryColor };
    padding-bottom: 2rem;
`;


const Footer = () => {
    return (
        <Wrapper>
            <div>
                Designed & built by Jagmeet Singh.
            </div>
        </Wrapper>
    )
}

export default Footer;