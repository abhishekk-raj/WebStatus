import { useState, useEffect } from 'react';
import { WebDetail } from '../types/web-detail';
import { WebError } from '../types/web-error';


const useGetWebDetail = (url: string): { data: WebDetail | WebError, error: WebError | Error | unknown } => {
    const [data, setData] = useState<any | null>(null);
    const [error, setError] = useState<Error | WebError | unknown>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: Response = await fetch(
                    `https://api.web-status.techoutopia.com/?url=${url}`,
                    { method: 'GET', cache: 'no-cache' });
                const apiResponse = await response.json();
                setData(apiResponse);
                console.log(apiResponse);
            } catch (error) {
                setError(error);
                console.log(error);
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
};

export default useGetWebDetail;