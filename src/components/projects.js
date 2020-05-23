import React from 'react';
import styled from 'styled-components';

import img1 from '../imgs/project-1.png';
import img2 from '../imgs/project-2.png';

import { CyanText, SectionHeading } from './Typography';
import { Image } from './Image';


const Project = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 0;
    @media(max-width: 500px){
        display: block;
    }
`;


const Description = styled.div`
    width: 40%;
    color: ${ ({theme : { colors } }) => colors.powderWhite }; 
    height: 100%;
    align-self: center;
    transform: translate(-40px,20px);
    @media(max-width: 500px){
        width: 100%;
        transform: none;
    }
`;

const DescriptionCard = styled.div`
    text-align: justify;
    padding: 1rem 1.5rem;
    background: ${ ({ theme: { colors } }) => colors.secondaryBgColor };
    
`;

const ProjectHeading = styled.h3`
    text-align: right;
    color: ${ ({ theme: { colors} }) => colors.primaryColor };
`;

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row-reverse;
`;

const ListItem = styled.li`
    margin: 0 0.5rem;
`;

const Link = styled.a`
    color: ${ ({ theme: { colors } }) => colors.powderWhite };
    &:hover {
        color: ${ ({ theme: { colors } }) => colors.secondaryColor };
        cursor: pointer;
    }
`;

const Projects = () => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <SectionHeading>
                <h1><CyanText>02.</CyanText> Some Things I've built</h1>
                <span className="line"></span>
            </SectionHeading>
            <Project>
                <Image width="40%" smWidth="100%">
                    <a href="https://jagmeetsinghalagh.github.io/github-viewer-react/">    
                        <img src={img1} alt="no img" />
                    </a>
                </Image>
                <Description>
                    <ProjectHeading>Github Profile Viewer</ProjectHeading>
                    <DescriptionCard>
                        A nicer look at your GitHub profile and repo stats.
                        Includes data visualizations of your top languages, starred repositories,
                        and sort through your top repos by number of stars, forks, and size.
                    </DescriptionCard>
                    <List>
                        <ListItem><CyanText>D3.js</CyanText></ListItem>
                        <ListItem><CyanText>Github API</CyanText></ListItem>
                        <ListItem><CyanText>ReactJS</CyanText></ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Link href="https://jagmeetsinghalagh.github.io/github-viewer-react/" target="_blank"><i className="fas fa-external-link-alt"></i></Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/jagmeetsinghalagh/github-viewer-react" target="_blank"><i className="fab fa-github"></i></Link>
                        </ListItem>
                    </List>
                </Description>
            </Project>
            <Project>
                <Image width="40%" smWidth="100%">
                    <a href="https://job-organizer-mern.herokuapp.com/">
                        <img src={img2} alt="no img" />
                    </a>
                </Image>
                <Description>
                    <ProjectHeading>Job Organizer</ProjectHeading>
                    <DescriptionCard>
                        Created a web app powered by React, Node and mongodb. 
                        Features implemented: 1) JWT based authentication 
                        2) Create, Retreive and Update jobs 3) Protected routes 
                        based on authentication.
                    </DescriptionCard>
                    <List>
                        <ListItem><CyanText>MongoDB</CyanText></ListItem>
                        <ListItem><CyanText>Express</CyanText></ListItem>
                        <ListItem><CyanText>ReactJS</CyanText></ListItem>
                        <ListItem><CyanText>Node.js</CyanText></ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Link href="https://job-organizer-mern.herokuapp.com/" target="_blank"><i className="fas fa-external-link-alt"></i></Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/jagmeetsinghalagh/job-organizer-mern" target="_blank"><i className="fab fa-github"></i></Link>
                        </ListItem>
                    </List>
                </Description>
            </Project>
        </div>
    );
}

export default Projects;