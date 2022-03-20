import { PictureShape } from '@utils/models';

import IconButton from '@components/IconButton';
import UserBadge from '@components/UserBadge';

import { Wrapper, Image, Overlay, Header, BigImage } from './Picture.styled';
import { useState } from 'react';

const Picture = ({ url, user }) => {
    const [show, setShow] = useState(false);
    return (
        <Wrapper>
            <Image src={url} onClick={() => setShow(true)} />
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
                    <BigImage src={url} alt='' />
                </Overlay>
            )}
        </Wrapper>
    );
};

Picture.propTypes = {
    ...PictureShape,
};

export default Picture;
