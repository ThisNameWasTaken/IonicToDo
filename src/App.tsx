import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ToDos from './pages/ToDos';
import AddToDo from './pages/AddToDo';

import ToDo from './types/ToDo';

import SelectedToDoContext from './contexts/selectedToDoContext';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [selectedToDo, selectToDo] = useState<ToDo | null | undefined>(null);

  return (
    <IonApp>
      <SelectedToDoContext.Provider
        value={{
          selectedToDo,
          selectToDo,
        }}
      >
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/to-dos">
              <ToDos />
            </Route>
            <Route path="/add-to-do">
              <AddToDo />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/">
              <Redirect to={localStorage.user ? '/to-dos' : '/sign-in'} />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </SelectedToDoContext.Provider>
    </IonApp>
  );
};

export default App;
