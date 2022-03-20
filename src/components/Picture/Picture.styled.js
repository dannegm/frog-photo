import styled, { css, keyframes } from 'styled-components';
import colors from '@styles/colors';

const slideUpIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(50%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Wrapper = styled.div`
    display: block;
    width: 100%;
`;

export const Image = styled.img`
    display: block;
    width: 100%;

    ${({ isSquare }) =>
        isSquare &&
        css`
            aspect-ratio: 1 / 1;
            object-fit: cover;
        `}
`;

export const Overlay = styled.div`
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${colors.black};
    overflow: hidden;
    animation: ${slideUpIn} 0.2s ease-in;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    padding: 16px;
    background: linear-gradient(179.47deg, #000000 0.45%, rgba(196, 196, 196, 0) 99.55%);
`;

export const BigImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
