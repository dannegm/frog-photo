import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

export const Container = styled.div`
    display: block;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex: none;
    height: 56px;
`;
