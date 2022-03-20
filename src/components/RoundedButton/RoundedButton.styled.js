import styled from 'styled-components';
import colors from '@styles/colors';

export const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 40px;
    background: linear-gradient(
        202.17deg,
        ${colors.gradientStart} 8.58%,
        ${colors.gradientEnd} 91.42%
    );
    border: 0;
    border-radius: 20px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;
