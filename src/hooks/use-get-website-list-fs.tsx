import { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

import { db } from "../utils/firebase";
import { Web } from "../types/web";
import { User } from "firebase/auth";

const useGetWebsiteListFirestore = (user: User) => {
  const [websiteDetailsList, setWebsiteDetailsList] = useState<Web[]>([]);
  console.log("Called");

  useEffect(() => {
    const fetchData = async () => {
      const websiteDetailsCollection = collection(
        db,
        "users",
        user!.uid,
        "websites"
      );
      const websiteDetailsSnapshot = await getDocs(websiteDetailsCollection);
      const websiteDetailsList = websiteDetailsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWebsiteDetailsList(websiteDetailsList as Web[]);
    };

    fetchData();
  }, [user]);

  return websiteDetailsList;
};

export default useGetWebsiteListFirestore;
