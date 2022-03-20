import styled from 'styled-components';
import colors from '@styles/colors';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    flex: 1;
    padding: 16px;
    display: block;
    background: ${colors.white};
    border: 2px solid ${colors.black};
    font-weight: 400;
    font-size: 15px;
`;
