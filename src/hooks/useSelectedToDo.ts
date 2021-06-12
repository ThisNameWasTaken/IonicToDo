import { useContext } from 'react';
import SelectedToDoContext from '../contexts/selectedToDoContext';

export default function useSelectedToDo() {
  return useContext(SelectedToDoContext);
}
