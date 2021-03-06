import { useEffect, useState } from 'react';

import { unsplashClient } from '@services/unsplash';
import { mapPhotos } from '@utils/mappers';

import useFetch from './useFetch';

const SEARCH_PHOTOS_ENDPOINT = '/search/photos';

const useSearchPictures = () => {
    const [photos, setPhotos] = useState();
    const { data, error, isLoading, fetchData } = useFetch(unsplashClient, SEARCH_PHOTOS_ENDPOINT);

    useEffect(() => {
        data && setPhotos(mapPhotos(data.results));
    }, [data]);

    return {
        photos,
        error,
        isLoading,
        fetchData,
    };
};

export default useSearchPictures;
