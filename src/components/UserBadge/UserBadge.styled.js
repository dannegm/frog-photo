import styled from 'styled-components';
import colors from '@styles/colors';

export const Wrapper = styled.div`
    display: block;
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const Avatar = styled.img`
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
`;

export const Title = styled.div`
    display: block;
    font-weight: 700;
    font-size: 13px;
    color: ${colors.black};
`;

export const Subtitle = styled.div`
    display: block;
    font-weight: 500;
    font-size: 11px;
    color: ${colors.black};
`;

export const InfoContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;
