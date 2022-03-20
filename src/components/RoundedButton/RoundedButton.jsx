import React from 'react';
import PropTypes from 'prop-types';

import colors from '@styles/colors';
import Icon from '@components/Icon';

import { Wrapper } from './RoundedButton.styled';

const RoundedButton = ({ icon, onClick }) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        onClick(ev);
    };

    return (
        <Wrapper onClick={handleClick}>
            <Icon icon={icon} size={20} color={colors.white} />
        </Wrapper>
    );
};

RoundedButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

RoundedButton.defaultProps = {
    onClick: () => null,
};

export default RoundedButton;
