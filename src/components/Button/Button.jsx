import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Button.styled';

const Button = ({ children, isPrimary, onClick }) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        onClick(ev);
    };

    return (
        <Wrapper isPrimary={isPrimary} onClick={handleClick}>
            {children}
        </Wrapper>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isPrimary: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    isPrimary: false,
    onClick: () => null,
};

export default Button;
