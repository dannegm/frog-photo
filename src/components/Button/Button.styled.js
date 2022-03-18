import styled, { css } from 'styled-components';
import colors from '@styles/colors';

export const Wrapper = styled.button`
    padding: 18px;
    display: inline-block;
    flex: 1;
    color: ${colors.black};
    background-color: ${colors.white};
    border: 2px solid ${colors.black};
    border-radius: 6px;
    font-size: 13px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        color: ${colors.accent};
        border-color: ${colors.accent};
    }

    &:active {
        transform: scale(0.9);
    }

    ${({ isPrimary }) =>
        isPrimary &&
        css`
            color: ${colors.white};
            background-color: ${colors.black};
            &:hover {
                color: ${colors.white};
                background-color: ${colors.accent};
                border-color: ${colors.accent};
            }
        `}
`;
