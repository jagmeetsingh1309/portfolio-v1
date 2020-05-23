import styled from 'styled-components';

export const Image = styled.div`
    position: relative;
    width: ${ ({ width}) => width ? width : '100%' };
    img{
        display: block;
        width: 100%;
        height: 100%;
    }
    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0; 
        right: 0;
        width: 100%; height:100%;
        top: 0; left:0;
        background: ${ ({ theme: { colors }}) => colors.secondaryColor };
        opacity: 0.15;
    }
    &:hover:after{
        opacity: 0;
        transition: opacity 0.2s;
        cursor: pointer
    }
    @media(max-width: 500px){
        width: ${ props => props.smWidth ? props.smWidth : '80%' };
        
        margin: 2rem auto;
    }
`;