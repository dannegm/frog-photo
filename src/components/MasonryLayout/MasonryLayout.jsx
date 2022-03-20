import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';

import { Wrapper } from './MasonryLayout.styled';

const MasonryLayout = ({ children }) => {
    return (
        <Wrapper>
            <Masonry
                breakpointCols={{ default: 2 }}
                className='masonry'
                columnClassName='masonry__column'
            >
                {children}
            </Masonry>
        </Wrapper>
    );
};

MasonryLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MasonryLayout;
