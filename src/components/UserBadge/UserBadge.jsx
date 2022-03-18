import PropTypes from 'prop-types';

import { Wrapper, Avatar, Title, Subtitle, InfoContainer } from './UserBadge.styled';

const UserBadge = ({ name, username, avatarUrl }) => {
    return (
        <Wrapper>
            <Avatar src={avatarUrl} alt='' />
            <InfoContainer>
                <Title>{name}</Title>
                <Subtitle>{`@${username}`}</Subtitle>
            </InfoContainer>
        </Wrapper>
    );
};

UserBadge.propTypes = {
    // TODO: Props Definition
};

UserBadge.defaultProps = {
    // TODO: Default Props Values
};

export default UserBadge;
