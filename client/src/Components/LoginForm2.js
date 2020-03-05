import React, {useState, useContext} from 'react';
import {AuthContext} from '../Providers/AuthProvider'

// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import FormGroup from '@material-ui/core/FormGroup'


// Material UI theme overrides
const styles = (theme => ({
  form:{
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.secondary.light
  },
  formField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

export default withStyles(styles)(({classes}) => {
  const {handleLogin} = useContext(AuthContext)

  // Login form fields
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    handleLogin({email, password})
  }

  return(
    <Paper className={classes.form} >
        <FormGroup row>
          <TextField
            required
            id="username"
            label="Email Address"
            defaultValue=""
            className={classes.formField}
            margin="normal"
            variant='outlined'
            color='secondary'
            onChange={(e)=>setEmail(e.target.value)}
            type='email'
          />
          <TextField
            required
            id="password"
            label="Password"
            defaultValue=""
            className={classes.formField}
            variant='outlined'
            margin="normal"
            onChange={(e)=>setPassword(e.target.value)}
            type='password'
          />
          <Button type="submit" onClick={handleSubmit}>Log In</Button>
        </FormGroup>
    </Paper>
  )
})
