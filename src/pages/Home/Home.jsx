import { useEffect } from 'react';

import useSearchPictures from '@hooks/useSearchPictures';
import useListPictures from '@hooks/useListPictures';

import Button from '@components/Button';
import Shell from '@components/Shell';
import Picture from '@components/Picture';
import MasonryLayout from '@components/MasonryLayout';

import { Title, Subtitle, ButtonContainer } from './Home.styled';

const useNewToday = () => {
    const { data, setParams } = useSearchPictures();

    useEffect(() => {
        setParams({
            orientation: 'squarish',
            order_by: 'latest',
            per_page: 4,
        });
    }, []);

    return {
        newTodayResults: data,
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
    const { browseAllResults } = useBrowseAll();
    return (
        <Shell>
            <Title>Discover</Title>
            <Subtitle>What&apos;s new today</Subtitle>

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
