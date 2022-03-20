import { useEffect, useState } from 'react';

import useSearchPictures from '@hooks/useSearchPictures';
import useDebounce from '@hooks/useDebounce';

import Button from '@components/Button';
import IconButton from '@components/IconButton';
import TextField from '@components/TextField';
import Shell from '@components/Shell';
import Picture from '@components/Picture';
import GridLayout from '@components/GridLayout';

import { Header, TextFieldContainer, Title, Subtitle, ButtonContainer } from './Search.styled';

const Search = () => {
    const [query, setQuery] = useState('');
    const searchQuery = useDebounce(query);
    const { photos, fetchData } = useSearchPictures();

    useEffect(() => {
        fetchData({
            query: searchQuery,
            order_by: 'relevant',
            per_page: 32,
        });
    }, [searchQuery]);

    return (
        <Shell>
            <Header>
                <Title>Search</Title>
                <IconButton icon='heart' />
            </Header>

            <TextFieldContainer>
                <TextField
                    placeholder='Search all photos'
                    value={query}
                    onChange={(ev) => setQuery(ev.target.value)}
                />
            </TextFieldContainer>

            {Boolean((photos || []).length) && (
                <>
                    <Subtitle>All Results</Subtitle>
                    <GridLayout>
                        {photos.map((picture) => (
                            <Picture key={picture.id} isSquare {...picture} />
                        ))}
                    </GridLayout>

                    <ButtonContainer>
                        <Button>See more</Button>
                    </ButtonContainer>
                </>
            )}
        </Shell>
    );
};

export default Search;
