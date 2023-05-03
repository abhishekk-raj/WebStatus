import { useEffect, useState } from 'react';

const useProxy = (url: string): { data: any | null, error: Error | unknown } => {
    const [data, setData] = useState<any | null>(null);
    const [error, setError] = useState<Error | unknown>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api?url=${url}`);
                setData(await response.json());
                console.log(data);
            } catch (error) {
                setError(error);
                console.log(error);
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
};

export default useProxy;