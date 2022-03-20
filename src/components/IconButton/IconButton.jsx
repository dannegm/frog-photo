import PropTypes from 'prop-types';

import colors from '@styles/colors';
import Icon from '@components/Icon';

import { Wrapper } from './IconButton.styled';

const IconButton = ({ icon, isDark, hasPadding, onClick }) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        onClick(ev);
    };

    return (
        <Wrapper isDark={isDark} hasPadding={hasPadding} onClick={handleClick}>
            <Icon icon={icon} size={20} color={isDark ? colors.white : colors.black} />
        </Wrapper>
    );
};

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    isDark: PropTypes.bool,
    hasPadding: PropTypes.bool,
    onClick: PropTypes.func,
};

IconButton.defaultProps = {
    isDark: false,
    hasPadding: true,
    onClick: () => null,
};

export default IconButton;
