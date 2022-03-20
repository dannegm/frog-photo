import styled from 'styled-components';
import colors from '@styles/colors';

export const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: none;
    border: 0;
    border-radius: 8px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        background: ${colors.lightGrey};
    }

    &:active {
        transform: scale(0.9);
    }
`;
