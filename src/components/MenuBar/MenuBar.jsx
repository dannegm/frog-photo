import IconButton from '@components/IconButton';
import RoundedButton from '@components/RoundedButton';

import { Wrapper } from './MenuBar.styled';

const MenuBar = () => {
    return (
        <Wrapper>
            <IconButton icon='home-outline' />
            <IconButton icon='search-outline' />
            <RoundedButton icon='plus-outline' />
            <IconButton icon='message-circle-outline' />
            <IconButton icon='person-outline' />
        </Wrapper>
    );
};

export default MenuBar;
