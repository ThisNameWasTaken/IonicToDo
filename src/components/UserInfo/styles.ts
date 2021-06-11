import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  userInfo: {
    padding: 0,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.dark,
  },
  userInfoSecondary: {
    color: theme.palette.primary.contrastText,
    opacity: 0.87,
  },
  textSkeleton: {
    height: '1rem',
    borderRadius: 2,
    backgroundColor: theme.palette.primary.contrastText,
    opacity: 0.22,
  },
  circleSkeleton: {
    backgroundColor: theme.palette.primary.contrastText,
    opacity: 0.22,
    borderRadius: '50%',
  },
  avatarSkeleton: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  avatarImage: {
    zIndex: 1,
  },
}));

export { useStyles };
