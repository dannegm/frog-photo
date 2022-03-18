import { useState } from 'react';

import useNonInitialEffect from '@hooks/useNonInitialEffect';
import { unsplashClient } from '@services/unsplash';
import { makeParams } from '@utils/helpers';
import { mapPhotos } from '@utils/mappers';

const SEARCH_PHOTOS_ENDPOINT = '/search/photos';

const useSearchPictures = () => {
    const [params, setParams] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const urlParams = makeParams(params);
            const response = await unsplashClient.get(`${SEARCH_PHOTOS_ENDPOINT}?${urlParams}`);
            setData(mapPhotos(response.data.results));
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useNonInitialEffect(() => {
        fetchData();
    }, [params]);

    return {
        data,
        error,
        isLoading,
        setParams,
    };
};

export default useSearchPictures;
