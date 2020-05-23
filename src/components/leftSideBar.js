import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
`;

const List = styled.ul`
    list-style-type: none;
`;

const ListItem = styled.li`
    margin: 1rem 0;
    &:hover {
        transform: translate(0, -5px);
        transititon: transform 0.2s;
        cursor: pointer;
    }
`;

const Link = styled.a`
    color: ${ ({ theme: { colors } }) => colors.powderWhite };
    &:hover {
        color: ${ ({ theme: { colors } }) => colors.secondaryColor };
    }
`;

const LeftSideBar = () => {
    return (
        <Wrapper>
            <List>
                <ListItem><Link href="https://github.com/jagmeetsinghalagh" target="_blank"><i className="fab fa-github"></i></Link></ListItem>
                <ListItem><Link href="https://www.linkedin.com/in/jagmeet-singh-491aa015b/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></ListItem>
                <ListItem><Link href="https://www.instagram.com/jagmeet1309/" target="_blank"><i className="fab fa-instagram"></i></Link></ListItem>
            </List>
        </Wrapper>
    )
}

export default LeftSideBar;