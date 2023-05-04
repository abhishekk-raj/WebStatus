import { Web } from "../types/web";

const saveWebsiteDetailsToDB = (key: string, initialValue: Web) => {
  const websiteDetails = localStorage.getItem(key);
  const parsedWebsiteDetails = websiteDetails ? JSON.parse(websiteDetails) : [];
  const webDetailToStore = JSON.stringify([
    ...parsedWebsiteDetails,
    initialValue,
  ]);
  localStorage.setItem(key, webDetailToStore);
};

export default saveWebsiteDetailsToDB;
