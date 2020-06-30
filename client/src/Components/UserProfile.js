import React, {useContext, useState} from 'react';
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


export default withStyles(styles)(({classes}) => {

return(
  <Paper className={classes.form}>
    My Account
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        emailAddress: '',
      }}
      validate={values => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
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
            name="First Name"
            type="text"
            label="First Name"
            required={true}
          />
          <Field
            className={classes.formField}
            component={TextField}
            type="text"
            label="Last Name"
            name="Last Name"
          />
          </FormGroup>
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
