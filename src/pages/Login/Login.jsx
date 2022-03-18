import { useEffect } from 'react';

import useSearchPictures from '@hooks/useSearchPictures';

import Button from '@components/Button';
import SlideShow from '@components/SlideShow';

import logo from '@assets/logo.svg';

import {
    Wrapper,
    Logo,
    AboutUs,
    Hero,
    LogoContainer,
    SlideShowContainer,
    Options,
} from './Login.styled';

const App = () => {
    const { data, setParams } = useSearchPictures();

    useEffect(() => {
        setParams({
            query: 'abstract',
            color: 'blue',
            orientation: 'portrait',
            order_by: 'relevant',
            per_page: 25,
        });
    }, []);

    return (
        <Wrapper>
            <Hero>
                <SlideShowContainer>
                    {data !== null && <SlideShow pictures={data} />}
                </SlideShowContainer>
                <LogoContainer>
                    <Logo loading='lazy' src={logo} alt='' />
                    <AboutUs>About Us</AboutUs>
                </LogoContainer>
            </Hero>
            <Options>
                <Button>Log In</Button>
                <Button isPrimary>Register</Button>
            </Options>
        </Wrapper>
    );
};

export default App;