import PropTypes from 'prop-types';

import { PictureShape } from '@utils/models';

import IconButton from '@components/IconButton';
import UserBadge from '@components/UserBadge';

import { Wrapper, Image, Overlay, Header, BigImage } from './Picture.styled';
import { useState } from 'react';

const Picture = ({ url, user, isSquare }) => {
    const [show, setShow] = useState(false);
    return (
        <Wrapper>
            <Image isSquare={isSquare} src={url} onClick={() => setShow(true)} loading='lazy' />
            {show && (
                <Overlay>
                    <Header>
                        <UserBadge
                            name={user.name}
                            username={user.username}
                            avatarUrl={user.avatarUrl}
                            isDark
                        />
                        <IconButton
                            isDark
                            hasPadding={false}
                            icon='close-outline'
                            onClick={() => setShow(false)}
                        />
                    </Header>
                    <BigImage src={url} alt='' loading='lazy' />
                </Overlay>
            )}
        </Wrapper>
    );
};

Picture.propTypes = {
    ...PictureShape,
    isSquare: PropTypes.bool.isRequired,
};

Picture.defaultProps = {
    isSquare: false,
};

export default Picture;
