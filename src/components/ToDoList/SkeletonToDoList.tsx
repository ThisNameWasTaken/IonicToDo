import { Skeleton } from '@material-ui/lab';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Done, MoreVert } from '@material-ui/icons';

export default function SkeletonToDoList() {
  return (
    <List aria-label="loading to dos">
      {new Array(6).fill(0).map((item, index) => (
        <ListItem aria-hidden="true" key={index}>
          <ListItemText
            primary={
              <Skeleton
                animation="wave"
                variant="text"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.22)' }}
                width={150}
                height={24}
              />
            }
            secondary={
              <Skeleton
                animation="wave"
                variant="text"
                width={60}
                height={20}
              />
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" color="secondary">
              <Done />
            </IconButton>
            <IconButton edge="end">
              <MoreVert />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
