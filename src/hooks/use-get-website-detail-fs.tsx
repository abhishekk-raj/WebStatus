import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { User } from "firebase/auth";

import { Web } from "../types/web";
import { auth, db } from "../utils/firebase";

const useGetWebsiteDetailFirestore = (user: User, websiteId: string) => {
  const [websiteDetails, setWebsiteDetails] = useState<Web>({
    id: "",
    name: "",
    url: "",
    status: "",
    lastUpdated: "",
  });

  useEffect(() => {
    const docRef = doc(db, "users", user.uid, "websites", websiteId);

    const fetchData = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setWebsiteDetails(docSnap.data() as Web);
      }
    };

    fetchData();
  }, [user, websiteId]);

  return websiteDetails;
};

export default useGetWebsiteDetailFirestore;
