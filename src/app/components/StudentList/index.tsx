import React, { useState } from 'react'
// import { TodoTextInput } from '../TodoTextInput';
// import { TodoActions } from 'app/actions/todos';
import { FormControlLabel } from '@material-ui/core'
import ToggleButton from '@material-ui/lab/ToggleButton';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import Button from '@material-ui/core/Button'
import CheckIcon from '@material-ui/icons/Check';
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
    currentCompany: '',
    willRefer: false,
    willChat: false,
    debugIsAdmin: false,
  })

  const addStudentHandler = () => {
    // todo: add to firebase: https://firebase.google.com/docs/database/admin/save-data#node.js_1
    const Student = {...state}
    console.log(Student)
  }

  const fullName = (
    <div>
      <TextField
        label="First Name"
        id="first-name"
        className={classes.textField}
        required
        onChange={event => setState({ ...state, firstName: event.target.value })}/>
      <TextField
        label="Last Name"
        id="last-name"
        className={classes.textField}
        required
        onChange={event => setState({ ...state, lastName: event.target.value })}/>
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
        onChange={event => setState({ ...state, universityEmail: event.target.value })}/>

      <TextField
        id="preferred-email"
        label="Preferred Email"
        style={{ margin: 8 }}
        helperText="for following up"
        fullWidth
        margin="normal"
        onChange={event => setState({ ...state, preferredEmail: event.target.value })}/>

      <TextField
        id="standard-number"
        label="Expected Grad Year"
        type="number"
        defaultValue={new Date().getFullYear() + 1}
        style={{ margin: 8 }}
        InputLabelProps={{
          shrink: true
        }}
        onChange={event => setState({ ...state, expectedGradYear: parseInt(event.target.value) })}/>
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
        onChange={event => setState({ ...state, currentCompany: event.target.value })}/>

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

  return (
    <div className={classes.root}>
      <div className="form">
        <ToggleButton
          value="check"
          selected={state.debugIsAdmin}
          onChange={() => {
            setState({...state, debugIsAdmin: !state.debugIsAdmin})
          }}
        >
          {state.debugIsAdmin ? 'Admin Mode' : 'Student Mode'}
          <CheckIcon/>
        </ToggleButton>
        {fullName}
        {universityInfo}
        {gradInfo}
        {alumniInfo}
        {/* todo: better validate https://redux-form.com/6.5.0/examples/material-ui/*/}
        <Button onClick={addStudentHandler} disabled={!(state.firstName && state.lastName && state.universityEmail)}
                variant="contained" color="primary">
          Add Student to DB</Button>
      </div>
    </div>
  )
}
