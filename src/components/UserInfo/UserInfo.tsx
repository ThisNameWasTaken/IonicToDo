import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import clsx from 'clsx';

import { useStyles } from './styles';

const UserInfo = ({ user }: any) => {
  const classes = useStyles();

  return (
    <ListItem alignItems="center" className={classes.userInfo}>
      <ListItemAvatar>
        {user ? (
          <Avatar className={classes.avatar}>
            <Skeleton
              className={clsx(classes.textSkeleton, classes.avatarSkeleton)}
              animation="wave"
              variant="rect"
              width={40}
              height={40}
            />
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={''}
                width={40}
                height={40}
                className={classes.avatarImage}
              />
            ) : (
              <>
                {user.displayName &&
                  user.displayName
                    .split(' ')
                    .slice(0, 2)
                    .reduce((acc: string, word: string) => acc + word[0], '')}
              </>
            )}
          </Avatar>
        ) : (
          <Skeleton
            className={classes.circleSkeleton}
            animation="wave"
            variant="circle"
            width={40}
            height={40}
          />
        )}
      </ListItemAvatar>
      <ListItemText
        primary={
          user?.displayName || (
            <Skeleton
              className={classes.textSkeleton}
              animation="wave"
              variant="text"
              width={100}
              height={24}
            />
          )
        }
        secondary={
          <span className={classes.userInfoSecondary}>
            {user?.email || (
              <Skeleton
                className={classes.textSkeleton}
                animation="wave"
                variant="text"
                width={160}
                height={19}
              />
            )}
          </span>
        }
      />
    </ListItem>
  );
};

export default UserInfo;
