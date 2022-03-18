import styled from 'styled-components';
import colors from '@styles/colors';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${colors.workArea};
`;

export const Container = styled.div`
    display: block;
    width: 375px;
    height: 90vh;
    max-height: 790px;
    background-color: ${colors.white};
    box-shadow: 2px 2px 20px 0px rgb(0 0 0 / 12%);
`;
