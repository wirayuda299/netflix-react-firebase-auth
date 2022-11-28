import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification
} from 'firebase/auth';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { auth } from '../firebase/firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [watchList, setWatchList] = useState([]);

  function signIn(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password) {
    const auth = getAuth();
     return createUserWithEmailAndPassword(auth, email, password)
  }

  function logOut() {
    try {
      const auth = getAuth();
      signOut(auth);
      localStorage.removeItem('token');
      setUser(null);
    } catch (error) {
      toast.error(error.message);
    }
  }
  function addToWatchList(movie) {
    try {
      const checkItems = localStorage.getItem('watchList');
      if (checkItems !== null) {
        const current = JSON.parse(checkItems);
        const hasDuplicate = current.find((item) => item.id === movie.id);
        if (hasDuplicate) {
          return toast.error(
            `${
              movie?.title ?? movie?.name ?? movie?.original_name
            } already in watchlist`,
          );
        }
        localStorage.setItem(
          'watchList',
          JSON.stringify([...current, movie]),
          toast.success(
            `${
              movie?.title ?? movie?.name ?? movie?.original_name
            } added to watchlist`,
          ),
        );
      }
      if (checkItems === null) {
        return localStorage.setItem('watchList', JSON.stringify([movie]));
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        email,
        setEmail,
        user,
        logOut,
        addToWatchList,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
