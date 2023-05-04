import { Web } from "../types/web";

const updateWebsiteDetailsToDB = (
  key: string,
  websiteId: string,
  status: number
) => {
  const websiteDetails = localStorage.getItem(key);
  const parsedWebsiteDetails = websiteDetails ? JSON.parse(websiteDetails) : [];
  const websiteToUpdate = parsedWebsiteDetails.map((website: Web) =>
    website.id === websiteId
      ? { ...website, status: status, lastUpdated: new Date().toISOString() }
      : website
  );
  const webDetailToStore = JSON.stringify(websiteToUpdate);
  localStorage.setItem(key, webDetailToStore);
};

export default updateWebsiteDetailsToDB;
