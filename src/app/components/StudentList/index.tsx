import React from 'react';
// import { TodoTextInput } from '../TodoTextInput';
// import { TodoActions } from 'app/actions/todos';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import { AlumniEmploymentInfo, WorkshopCompletion } from 'app/models/StudentModel'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export namespace StudentList {
  export interface Props {
    // addTodo: typeof TodoActions.addTodo;
  }
}

export const StudentList = (): JSX.Element => {
  const classes = useStyles();

  const fullName = (
    <div>
      <TextField
        label="First Name"
        id="first-name"
        className={classes.textField}
        required
      />
      <TextField
        label="Last Name"
        id="last-name"
        className={classes.textField}
        required
      />
    </div>
  )

  const universityInfo = (
    <div>
      <TextField
        id="university-email"
        label="University Email"
        style={{ margin: 8 }}
        helperText="for verification"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="preferred-email"
        label="Preferred Email"
        style={{ margin: 8 }}
        helperText="for following up"
        fullWidth
        margin="normal"
      />
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        // placeholder={new Date().getFullYear()}
        style={{ margin: 8 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
  //   expectedGraduationYear?: number,
  // isGraduated?: boolean,
  //
  // export interface AlumniEmploymentInfo {
  //   currentCompany: string,
  //   willingToRefer: boolean,
  //   willingToChat: boolean,

  return (
    <div className={classes.root}>
      <div>
        {fullName}
        {universityInfo}
        <TextField
          label="Normal"
          id="margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="filled-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          label="None"
          id="filled-margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          variant="filled"
        />
        <TextField
          label="Dense"
          id="filled-margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="dense"
          variant="filled"
        />
        <TextField
          label="Normal"
          id="filled-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="filled"
        />
      </div>
    </div>
  );
};
