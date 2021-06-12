import { createContext } from 'react';
import ToDo from '../types/ToDo';

const SelectedToDoContext = createContext<{
  selectToDo:
    | React.Dispatch<React.SetStateAction<ToDo | null | undefined>>
    | (() => void);
  selectedToDo: ToDo | null | undefined;
}>({ selectToDo: () => {}, selectedToDo: null });

export default SelectedToDoContext;
