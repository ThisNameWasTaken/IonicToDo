import { useEffect, useState } from 'react';
import firebase from '../utils/firebase';

export default function useUser() {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      localStorage.user = user ? JSON.stringify(user) : null;
    });
  }, []);

  return user;
}
