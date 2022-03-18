import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';
import colors from '@styles/colors';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 3;
    background: ${rgba(colors.white, 0.5)};
    backdrop-filter: blur(1rem);
`;

export const Circle = styled.div`
    display: block;
    width: 3rem;
    height: 3rem;
    border: 4px solid ${colors.black};
    border-top-color: ${rgba(colors.black, 0.25)};
    border-radius: 50%;
    animation: ${spin} 1s infinite ease;
`;
