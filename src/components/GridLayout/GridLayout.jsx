import PropTypes from 'prop-types';

import { Wrapper } from './GridLayout.styled';

const GridLayout = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

GridLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GridLayout;
