import styled from 'styled-components';
import { rgba } from 'polished';
import colors from '@styles/colors';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Hero = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    position: relative;
`;

export const SlideShowContainer = styled.div`
    display: flex;
    background-color: ${colors.lightGrey};
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
`;

export const Logo = styled.img`
    display: block;
    width: 206px;
    margin-bottom: 23px;
`;

export const AboutUs = styled.div`
    width: 168px;
    padding: 6px;
    display: block;
    font-weight: 900;
    text-shadow: 0px 4px 4px ${rgba(colors.black, 0.25)};
    text-align: center;
    text-transform: uppercase;
    color: ${colors.white};
    background-color: ${rgba(colors.black, 0.25)};
    border-radius: 6px;
`;

export const Options = styled.div`
    height: 84px;
    flex: none;
    display: flex;
    padding: 16px;
    gap: 8px;
`;
