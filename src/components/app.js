import React from 'react';
import styled from 'styled-components';

import Theme from './theme';
import Intro from './intro';
import About from './about';
import Projects from './projects';
import LeftSideBar from './leftSideBar';
import Footer from './footer';

const Wrapper = styled.div`
    background: ${ ({ theme: { colors } }) => colors.primaryBgColor };
`;

const LeftWrapper = styled.div`
    width: 100px;
    position: fixed;
    left: 0;
    top: 0;
    @media(max-width: 500px){
        display: none;
    }
`;

const MiddleWrapper = styled.div`
    margin-left: 100px;
    @media(max-width: 500px){
        width: 90%;
        margin: auto;
    }
`;

const App = () => {
    return (
        <Theme>
            <Wrapper>
                <LeftWrapper>
                    <LeftSideBar />
                </LeftWrapper>
                <MiddleWrapper>
                    <Intro />
                    <About />
                    <Projects />
                    <Footer />
                </MiddleWrapper>
            </Wrapper>
        </Theme>
    );
}

export default App;