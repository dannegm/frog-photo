import React from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@components/IconButton';
import RoundedButton from '@components/RoundedButton';

import { Wrapper } from './MenuBar.styled';

const MenuBar = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <IconButton onClick={() => navigate('/home')} icon='home-outline' />
            <IconButton onClick={() => navigate('/search')} icon='search-outline' />
            <RoundedButton icon='plus-outline' />
            <IconButton icon='message-circle-outline' />
            <IconButton icon='person-outline' />
        </Wrapper>
    );
};

export default MenuBar;
