import PropTypes from 'prop-types';

import Icon from '@components/Icon';

import { Wrapper } from './IconButton.styled';

const IconButton = ({ icon, onClick }) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        onClick(ev);
    };

    return (
        <Wrapper onClick={handleClick}>
            <Icon icon={icon} size={20} />
        </Wrapper>
    );
};

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

IconButton.defaultProps = {
    onClick: () => null,
};

export default IconButton;
