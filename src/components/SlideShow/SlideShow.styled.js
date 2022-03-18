import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: block;
    flex: 1;
    position: relative;
`;

export const SlideContainer = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
`;

export const Slide = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 0;
    transition: all 2s;

    ${({ isActive }) =>
        isActive &&
        css`
            opacity: 1;
        `}
`;

export const Overlay = styled.div`
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px 20px;
`;
