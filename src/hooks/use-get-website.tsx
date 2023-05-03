import { useState, useEffect } from 'react';
import { Web } from '../types/web';

const useGetWebsite = (key: string, id: string) => {
    const [value, setValue] = useState<Web[]>([]);

    useEffect(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue !== null) {
            setValue(JSON.parse(storedValue));
        }
    }, [key]);

    return value.filter((web) => web.id === id)[0];
};

export default useGetWebsite;
