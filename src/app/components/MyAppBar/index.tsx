import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { useHistory} from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: '#4502b1',
  }
}));

export namespace MyAppBar {
  export interface Props {
    // addTodo: typeof TodoActions.addTodo;
  }
}

export const MyAppBar = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}
          <Typography variant="h6" className={classes.title}>
            Western Tech Alumni
          </Typography>
          <Button color="inherit" onClick={() => history.push(`/search`)}>Search</Button>
          <Button color="inherit" onClick={() => history.push(`/admin`)}>Admin</Button>
          <Button color="inherit" onClick={() => history.push(`/login`)}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
