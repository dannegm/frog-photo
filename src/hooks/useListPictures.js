import { useEffect, useState } from 'react';

import { unsplashClient } from '@services/unsplash';
import { mapPhotos } from '@utils/mappers';

import useFetch from './useFetch';

const LIST_PHOTOS_ENDPOINT = '/photos';

const useListPictures = () => {
    const [photos, setPhotos] = useState();
    const { data, error, isLoading, fetchData } = useFetch(unsplashClient, LIST_PHOTOS_ENDPOINT);

    useEffect(() => {
        data && setPhotos(mapPhotos(data));
    }, [data]);

    return {
        photos,
        error,
        isLoading,
        fetchData,
    };
};

export default useListPictures;
