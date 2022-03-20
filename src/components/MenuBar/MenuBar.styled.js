import styled from 'styled-components';
import { rgba } from 'polished';
import colors from '@styles/colors';

export const Wrapper = styled.nav`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: ${colors.white};
    box-shadow: 0px -0.5px 0px ${rgba(colors.black, 0.3)};
`;
