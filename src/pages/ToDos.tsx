import { Add } from '@material-ui/icons';

import ExtendedFAB from '../components/ExtendedFAB';
import NavBar from '../components/NavBar';
import TabBar from '../components/TabBar/TabBar';
import SkeletonToDoList from '../components/ToDoList/SkeletonToDoList';
import useToDos from '../hooks/useToDos';
import { lazy, Suspense, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import { IonContent, IonPage } from '@ionic/react';

const ToDoList = lazy(() => import('../components/ToDoList/ToDoList'));

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 72 + 48,
    height: '100%',
    // boxSizing: 'border-box',
  },
  container: {
    maxWidth: 1330,
    width: '100%',
    margin: 'auto',
    height: '100%',
  },
}));

export default function ToDos() {
  const Router = useHistory();
  const classes = useStyles();
  const activeTodos = useToDos('active');
  const completedTodos = useToDos('completed');
  const [todoList, setTodoList] = useState(activeTodos);
  const [tab, setTab] = useState('active');
  const [isExtended, setIsExtended] = useState(true);

  function onTabChange(value: 'active' | 'completed') {
    setTab(value);
  }

  useEffect(() => {
    if (tab === 'active') {
      return setTodoList(activeTodos);
    }

    if (tab === 'completed') {
      return setTodoList(completedTodos);
    }
  }, [tab, activeTodos, completedTodos]);

  return (
    <IonPage>
      <IonContent
        scrollEvents
        onIonScroll={(event) => {
          setIsExtended(event.detail.scrollTop < 10);
        }}
      >
        <div className={classes.root}>
          <NavBar />
          <TabBar onTabChange={onTabChange} />
          <main className={classes.container}>
            <Suspense fallback={<SkeletonToDoList />}>
              {!todoList ? <SkeletonToDoList /> : <ToDoList items={todoList} />}
            </Suspense>
          </main>
          <ExtendedFAB
            icon={<Add />}
            extended={isExtended}
            label="Add To Do"
            onClick={() => {
              Router.push('/add-to-do');
            }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
}
