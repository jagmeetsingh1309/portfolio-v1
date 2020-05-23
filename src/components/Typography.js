import styled from 'styled-components';

export const Heading1 = styled.h1`
    font-size: 5rem;
    margin: 0;
    color: ${ ({ theme: { colors } }) => colors.powderWhite };
    @media(max-width: 500px){
        font-size: 3rem;
    }
`;

export const Heading2 = styled.h1`
    font-size: 5rem;
    margin: 0;
    color: ${ ({ theme: { colors } }) => colors.primaryColor };
    @media(max-width: 500px){
        font-size: 3rem;
    }
`;

export const CyanText = styled.span`
    color: ${ ({ theme: { colors } }) => colors.secondaryColor };
`;

export const Paragraph = styled.p`
    display: block;
    width: ${ ({ width }) => width };
    text-align: justify;
    color: ${ ({ theme: { colors } }) => colors.primaryColor };
    @media(max-width: 500px){
        width: 100%;
    }
`;

export const SectionHeading = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    h1{
        color: ${ ({ theme: { colors } }) => colors.powderWhite };
        margin: 0;
    }
    .line{
        
        border-top: 1px solid grey;
        flex-grow: 1;
        margin-top: 5px;
        margin-left: 10px;
    }
    @media(max-width: 500px){
        width: 100%;
        h1{
            font-size: 1.5rem;
        }
    }
`;