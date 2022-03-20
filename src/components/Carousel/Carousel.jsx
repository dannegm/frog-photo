import React from 'react';
import PropTypes from 'prop-types';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { PictureShape } from '@utils/models';

import UserBadge from '@components/UserBadge';
import IconButton from '@components/IconButton';
import Picture from '@components/Picture';

import { CarouselItemWrapepr, InfoContainer } from './Carousel.styled';

const Carousel = ({ pictures }) => {
    const carouselOptions = {
        autoPlay: true,
        stopOnHover: true,
        showIndicators: false,
        swipeable: true,
        useKeyboardArrows: true,
        showThumbs: false,
        showArrows: false,
        showStatus: false,
        infiniteLoop: true,
    };

    return (
        <ReactCarousel {...carouselOptions}>
            {pictures.map((picture) => (
                <CarouselItemWrapepr key={picture.id}>
                    <Picture isSquare {...picture} />
                    <InfoContainer>
                        <UserBadge {...picture.user} />
                        <IconButton icon='heart' />
                    </InfoContainer>
                </CarouselItemWrapepr>
            ))}
        </ReactCarousel>
    );
};

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.shape(PictureShape)),
};

Carousel.defaultProps = {
    pictures: [],
};

export default Carousel;
