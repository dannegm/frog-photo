import { useState } from 'react';

import { makeParams } from '@utils/helpers';

const useSearchPictures = (httpClient, endpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (params) => {
        setIsLoading(true);
        try {
            const urlParams = makeParams(params);
            const response = await httpClient.get(`${endpoint}?${urlParams}`);
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        data,
        error,
        isLoading,
        fetchData,
    };
};

export default useSearchPictures;
