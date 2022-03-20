import PropTypes from 'prop-types';

import MenuBar from '@components/MenuBar';

import { Wrapper, Container, MenuContainer } from './Shell.styled';

const Shell = ({ children }) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
            <MenuContainer>
                <MenuBar />
            </MenuContainer>
        </Wrapper>
    );
};

Shell.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Shell;
