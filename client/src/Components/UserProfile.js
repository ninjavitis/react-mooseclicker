import React, {useState, useEffect} from 'react';
import axios from 'axios' 
import { withStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'
import FormGroup from '@material-ui/core/FormGroup'

const styles = (theme => ({
  form:{
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.secondary.light
  },
  formField: {
    margin: theme.spacing(1),
  },
}))


const UserProfile = withStyles(styles)(({classes}) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')

  const validateEmail = value => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  const validateName = value => {
    let error;
    let re = /[^a-zA-Z]/g
    if (!value) {
      error = 'Required';
    } else if (re.test(value)) {
      error = 'Invalid name';
    }
    return error;
  }

return(
  <Paper className={classes.form}>
    <Formik
      initialValues={{
        firstName: firstName,
        lastName: lastName,
        email: emailAddress,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <FormGroup row>
          <Field
            className={classes.formField}
            component={TextField}
            name="firstName"
            label="First Name"
            type="text"
            validate={validateName}
          />
          <Field
            className={classes.formField}
            component={TextField}
            type="text"
            label="Last Name"
            name="lastName"
            validate={validateName}
          />
          </FormGroup>
          <Field
            className={classes.formField}
            component={TextField}
            type="email"
            label="Email Address"
            name="email"
            validate={validateEmail}
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </Paper>
)
}) 

export default UserProfile