import { Web } from '../types/web';

const saveWebsiteDetailsToDB = (key: string, initialValue: Web) => {
    console.log('usePostWebDetail', key, initialValue);

    const websiteDetails = localStorage.getItem(key);
    const parsedWebsiteDetails = websiteDetails ? JSON.parse(websiteDetails) : [];
    console.log('parsedWebsiteDetails', parsedWebsiteDetails);
    const webDetailToStore = JSON.stringify([...parsedWebsiteDetails, initialValue]);
    console.log('webDetailToStore', webDetailToStore);
    localStorage.setItem(key, webDetailToStore);
};

export default saveWebsiteDetailsToDB;
