import { useEffect } from 'react';
import useGetWebDetail from './use-get-web-detail';

const useGetWebsiteDetailInInterval = (callback: () => void) => {
    useEffect(() => {
        const interval = setInterval(() => {
            useGetWebDetail('https://jsonplaceholder.typicode.com/todos/1');
        }, 1000 * 60 * 30);

        return () => clearInterval(interval);
    }, [callback]);
};

export default useGetWebsiteDetailInInterval;