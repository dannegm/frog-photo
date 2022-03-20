import styled from 'styled-components';

export const Header = styled.div`
    margin-top: 32px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.div`
    display: block;
    font-family: 'Comfortaa', Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
`;

export const Subtitle = styled.div`
    display: block;
    padding: 16px;
    font-weight: 900;
    font-size: 13px;
    text-transform: uppercase;
`;

export const TextFieldContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 16px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 16px;
`;
