import { useHistory } from 'react-router';
import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const BackButton = (props: any) => {
  const history = useHistory();

  return (
    <IconButton
      aria-label="back"
      color="primary"
      onClick={(event) => {
        event.preventDefault();
        history.goBack();
      }}
      {...props}
    >
      <ArrowBack />
    </IconButton>
  );
};

export default BackButton;
