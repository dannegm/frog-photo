import { useEffect } from 'react';

import React from 'react';
import useListPictures from '@hooks/useListPictures';

import Button from '@components/Button';
import Shell from '@components/Shell';
import Picture from '@components/Picture';
import Carousel from '@components/Carousel';
import MasonryLayout from '@components/MasonryLayout';

import { Title, Subtitle, ButtonContainer } from './Home.styled';

const useNewToday = () => {
    const { photos, fetchData } = useListPictures();

    useEffect(() => {
        fetchData({
            orientation: 'squarish',
            order_by: 'latest',
            per_page: 4,
        });
    }, []);

    return {
        newTodayResults: photos,
    };
};

const useBrowseAll = () => {
    const { photos, fetchData } = useListPictures();

    useEffect(() => {
        fetchData({
            orientation: 'portrait',
            order_by: 'relevant',
            per_page: 32,
        });
    }, []);

    return {
        browseAllResults: photos,
    };
};

const Home = () => {
    const { newTodayResults } = useNewToday();
    const { browseAllResults } = useBrowseAll();

    return (
        <Shell>
            <Title>Discover</Title>
            <Subtitle>What&apos;s new today</Subtitle>

            {Boolean(newTodayResults) && <Carousel pictures={newTodayResults} />}

            <Subtitle>Browse all</Subtitle>

            {Boolean(browseAllResults) && (
                <MasonryLayout>
                    {browseAllResults.map((picture) => (
                        <Picture key={picture.id} {...picture} />
                    ))}
                </MasonryLayout>
            )}

            <ButtonContainer>
                <Button>See more</Button>
            </ButtonContainer>
        </Shell>
    );
};

export default Home;
