import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container } from './DeviceContainer.styled';

const DeviceContainer = ({ children }) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};

DeviceContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DeviceContainer;
