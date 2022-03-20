import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import colors from '@styles/colors';

export const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 0;
    border-radius: 8px;
    transition: all 0.2s;
    cursor: pointer;

    ${({ hasPadding }) =>
        hasPadding &&
        css`
            width: 40px;
            height: 40px;
        `}

    &:hover {
        background: ${colors.lightGrey};
    }

    &:active {
        transform: scale(0.9);
    }

    ${({ isDark }) =>
        isDark &&
        css`
            &:hover {
                background: ${rgba(colors.black, 0.5)};
            }
        `}
`;
