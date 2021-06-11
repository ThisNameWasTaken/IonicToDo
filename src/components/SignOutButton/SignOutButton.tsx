import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import firebase from '../../utils/firebase';
import SignOutIcon from './SignOutIcon';
import { useStyles } from './styles';

const SignOutButton = (props: any) => {
  const classes = useStyles();
  const history = useHistory();

  async function signOut() {
    const auth = await firebase.auth();
    auth.signOut();
    history.push('/sign-in');
  }

  return (
    <IconButton
      aria-label="sign out"
      color="inherit"
      onClick={signOut}
      {...props}
    >
      <SignOutIcon className={classes.icon} />
    </IconButton>
  );
};

export default SignOutButton;
