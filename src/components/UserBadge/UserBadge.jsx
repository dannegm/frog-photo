import React from 'react';
import PropTypes from 'prop-types';

import { UserShape } from '@utils/models';

import { Wrapper, Avatar, Title, Subtitle, InfoContainer } from './UserBadge.styled';

const UserBadge = ({ name, username, avatarUrl, isDark }) => {
    return (
        <Wrapper>
            <Avatar src={avatarUrl} alt='' loading='lazy' />
            <InfoContainer>
                <Title isDark={isDark}>{name}</Title>
                <Subtitle isDark={isDark}>{`@${username}`}</Subtitle>
            </InfoContainer>
        </Wrapper>
    );
};

UserBadge.propTypes = {
    ...UserShape,
    isDark: PropTypes.bool,
};

UserBadge.defaultProps = {
    isDark: false,
};

export default UserBadge;
