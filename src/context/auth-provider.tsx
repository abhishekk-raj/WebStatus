import { User } from "firebase/auth";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../utils/firebase";

interface AuthContext {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user as User);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
