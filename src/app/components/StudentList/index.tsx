import React, { useState } from 'react'
// import { TodoTextInput } from '../TodoTextInput';
// import { TodoActions } from 'app/actions/todos';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import { FormControlLabel } from '@material-ui/core'
import Button from '@material-ui/core/Button'
// import { AlumniEmploymentInfo, WorkshopCompletion } from 'app/models/StudentModel'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch'
  }
}))

export namespace StudentList {
  export interface Props {
    // addTodo: typeof TodoActions.addTodo;
  }
}

export const StudentList = (): JSX.Element => {
  const classes = useStyles()
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    universityEmail: '',
    preferredEmail: '',
    expectedGradYear: new Date().getFullYear() + 1,
    isGraduated: false,
    isEmployed: false,
    willRefer: false,
    willChat: false,
  })

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
    <FormGroup>
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
        label="Expected Grad Year"
        type="number"
        defaultValue={new Date().getFullYear() + 1}
        style={{ margin: 8 }}
        InputLabelProps={{
          shrink: true
        }}
      />
    </FormGroup>
  )

  const gradInfo = (
    <div>
      <FormControlLabel
        control={<Checkbox name="checkedGraduated" checked={state.isGraduated}
                           onChange={() => setState({ ...state, isGraduated: !state.isGraduated })}/>}
        label="Has Graduated"
      />
      <FormControlLabel
        control={<Checkbox name="checkedEmployed" checked={state.isEmployed}
                           onChange={() => setState({ ...state, isEmployed: !state.isEmployed })}/>}
        label="Is Employed"
      />
    </div>
  )

  const alumniInfo = state.isEmployed && (
    <FormGroup>
      <TextField
        label="Current Company"
        id="current-company"
        className={classes.textField}
        required
      />
      <FormControlLabel
        control={<Checkbox name="checkedRefer" checked={state.willRefer}
                           onChange={() => setState({ ...state, willRefer: !state.willRefer })}/>}
        label="Willing to Refer"
      />
      <FormControlLabel
        control={<Checkbox name="checkedChat" checked={state.willChat}
                           onChange={() => setState({ ...state, willChat: !state.willChat })}/>}
        label="Willing to Chat"
      />
    </FormGroup>
  )
  // export interface AlumniEmploymentInfo {
  //   currentCompany: string,
  //   willingToRefer: boolean,
  //   willingToChat: boolean,

  return (
    <div className={classes.root}>
      <div className="form">
        {fullName}
        {universityInfo}
        {gradInfo}
        {alumniInfo}
        <Button variant="contained" color="primary">
          Add Student to DB
        </Button>
      </div>
    </div>
  )
}
