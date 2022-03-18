import PropTypes from 'prop-types';

export const UserShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
};

export const PictureShape = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    user: PropTypes.shape(UserShape).isRequired,
};
