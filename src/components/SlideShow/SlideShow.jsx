import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { getRandomInt } from '@utils/helpers';
import { PictureShape } from '@utils/models';

import UserBadge from '@components/UserBadge';

import { Wrapper, SlideContainer, Slide, Overlay } from './SlideShow.styled';

const SlideShow = ({ pictures, interval }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [user, setUser] = useState(null);
    const $timer = useRef(null);

    const nextRandomSlide = () => {
        const randomIndex = getRandomInt(0, pictures.length - 1);
        setCurrentSlide(randomIndex);
        setUser(pictures[randomIndex]?.user);
    };

    useEffect(() => {
        $timer.current = setInterval(nextRandomSlide, interval);

        return () => {
            clearInterval($timer.current);
        };
    }, []);

    return (
        <Wrapper>
            <SlideContainer>
                {pictures.map((picture, index) => (
                    <Slide
                        key={picture.id}
                        isActive={currentSlide === index}
                        src={picture.url}
                        alt=''
                    />
                ))}
            </SlideContainer>
            {user && (
                <Overlay>
                    <UserBadge
                        name={user.name}
                        username={user.username}
                        avatarUrl={user.avatarUrl}
                    />
                </Overlay>
            )}
        </Wrapper>
    );
};

SlideShow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.shape(PictureShape)),
    interval: PropTypes.number,
};

SlideShow.defaultProps = {
    pictures: [],
    interval: 5000,
};

export default SlideShow;
