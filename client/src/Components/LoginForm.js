import React, {useState, useContext} from 'react';
import {AuthContext} from '../Providers/AuthProvider'

// Material UI
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'


// Material UI theme overrides
const styles = (theme => ({}))

export default withStyles(styles)((props,{classes}) => {
  const {handleLogin} = useContext(AuthContext)

  // Login form fields
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    handleLogin({email, password})
    props.handleClose()
  }

  return(
    <>
      <Typography variant='h6'>
        Log In
      </Typography>
      <FormGroup>
        <FormControl>
        <InputLabel htmlFor="email" required>Email address</InputLabel>
          <Input 
          id="email" 
          aria-describedby="my-helper-text" 
          onChange={(e)=>setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password" required>Password</InputLabel>
          <Input 
            id="password" 
            aria-describedby="Choose your password"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </FormControl>
        <Button type="submit" onClick={()=>handleSubmit()}>Log In</Button>
      </FormGroup>
    </>
  )
})