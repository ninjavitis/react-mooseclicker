import React, {useState, useContext} from 'react';
import {AuthContext} from '../Providers/AuthProvider'
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormGroup from '@material-ui/core/FormGroup'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'



const styles = (theme => ({}))

export default withStyles(styles)(({classes}) => {
  const {handleLogin} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    handleLogin({email, password})
  }

  return(
    <>
      <Typography variant='h6'>
        Log In
      </Typography>
      <FormGroup>
        <FormControl>
        <InputLabel htmlFor="emailAddress" required>Email address</InputLabel>
          <Input id="loginEmailAddress" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password" required>Password</InputLabel>
          <Input 
            id="loginPassword" 
            aria-describedby="Choose your password"
            type="password"
            onChange={(e)=>setEmail(e.target.value)}
            autoComplete="current-password"
          />
        </FormControl>
        <Button type="submit" onClick={()=>handleSubmit()}>Log In</Button>
      </FormGroup>
    </>
  )
})
