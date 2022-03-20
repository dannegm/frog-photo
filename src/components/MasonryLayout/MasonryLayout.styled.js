import styled from 'styled-components';

export const Wrapper = styled.div`
    & .masonry {
        display: flex;
        padding: 16px;
        gap: 16px;

        &__column {
            & > * {
                margin-bottom: 16px;
            }
        }
    }
`;
