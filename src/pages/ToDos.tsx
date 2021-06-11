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
      <IonContent>
        <div style={{ paddingTop: 72 + 48, height: '100%' }}>
          <NavBar />
          <TabBar onTabChange={onTabChange} />
          <main className={classes.container}>
            <Suspense fallback={<SkeletonToDoList />}>
              {!todoList ? <SkeletonToDoList /> : <ToDoList items={todoList} />}
            </Suspense>
          </main>
          <ExtendedFAB
            icon={<Add />}
            label="Add To Do"
            onClick={() => {
              Router.push('/add-todo');
            }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
}
