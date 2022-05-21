import React from 'react';
import styled from 'styled-components';

import img2 from '../imgs/me.png';
import { CyanText, SectionHeading,Paragraph } from './Typography';
import { Image } from './Image';

const List = styled.ul`
    list-style-type: none;
    display: flex;
    margin-left: 0;
    padding: 0;
`;

const ListItem = styled.li`
    color: ${ ({ theme: { colors } }) => colors.powderWhite };
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12,1fr);
`;

const GridCol = styled.div`
    grid-column: ${ props => props.start } / ${ props => props.end };
    @media(max-width: 500px){
        grid-column: 1 / 13;
    }
`;


const About = () => {
    return (
        <React.Fragment>
            <SectionHeading>
                <h1><CyanText>01.</CyanText> About Me</h1>
                <span className="line"></span>
            </SectionHeading>
            <GridContainer>
                <GridCol start={1} end={8}>
                    <Paragraph width="90%">
                        Hello, I'm a software engineer specializing in building exceptional digital experience.
                            I strive to create software that not only functions efficiently under
                        the hood, but also provides intuitive, pixel-perfect user experiences.
                        I love learning new and better ways to create seamless user experiences with clean,
                        efficient, and scalable code.I consider work an ongoing education, 
                        and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn.
                        At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.
                        Here are a few technologies I've been working with recently: 
                    </Paragraph>
                    <List>
                        <div>
                            <ListItem>
                                <CyanText><i className="fas fa-caret-right"></i></CyanText> Javascript(ES 6+)
                            </ListItem>
                            <ListItem>
                                <CyanText><i className="fas fa-caret-right"></i></CyanText> React
                            </ListItem>
                            <ListItem>
                                <CyanText><i className="fas fa-caret-right"></i></CyanText> Node.js
                            </ListItem>
                        </div>
                        <div style={{ marginLeft: '4rem' }}>
                            <ListItem>
                                <CyanText><i className="fas fa-caret-right"></i></CyanText> Spring Boot
                            </ListItem>
                            <ListItem>
                                <CyanText><i className="fas fa-caret-right"></i></CyanText> MongoDB
                            </ListItem>
                            <ListItem>
                                <CyanText><i className="fas fa-caret-right"></i></CyanText> MySQL
                            </ListItem>
                        </div>
                    </List>
                </GridCol>
                <GridCol start={9} end={11}>
                    <Image>
                        <img src={img2} alt="no img." />
                    </Image>
                </GridCol>
            </GridContainer>
        </React.Fragment>
    )
}

export default About;