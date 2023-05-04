import { useState, useEffect } from "react";
import { Web } from "../types/web";

const useGetWebsiteList = (key: string) => {
  const [value, setValue] = useState<Web[]>([]);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  return value;
};

export default useGetWebsiteList;
