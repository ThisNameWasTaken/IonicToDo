import { useEffect, useState } from 'react';
import firebase from '../utils/firebase';
import useUser from './useUser';

export default function useToDos(status: 'active' | 'completed') {
  const [toDos, setToDos] = useState<any[] | null>();
  const user = useUser();

  useEffect(() => {
    if (!user) return;

    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('todos')
      .where('status', '==', status)
      .onSnapshot((querySnapshot) => {
        const toDos: any[] = [];

        console.log({ toDos });

        querySnapshot.forEach((doc) => {
          const toDo = doc.data();
          toDo.id = doc.id;
          toDos.push(toDo);
        });

        setToDos(toDos);
      });
  }, [user, status]);

  return toDos;
}
