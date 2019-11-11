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
  const {handleRegister} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConf, setPassConf] = useState('')

  const handleSubmit = (e) => {
    if(password === passConf){
      handleRegister({email, password})
      props.history.push('/')
    } else {
      alert('Passwords must match!')
    }
  }

  return(
    <>
      <Typography variant='h2'>
        Register your moose!
      </Typography>
      <FormGroup>
        <FormControl>
        <InputLabel htmlFor="emailAddress" required>Email address</InputLabel>
          <Input 
            id="emailAddress"
            aria-describedby="my-helper-text"
            onChange={(e)=>setEmail(e.target.value)} 
          />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
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
        <FormControl>
          <InputLabel htmlFor="passConf" required >Confirm Password</InputLabel>
          <Input 
            id="passConf" 
            aria-describedby="Re-enter your password"
            type="password"
            onChange={(e)=>setPassConf(e.target.value)}

          />
        </FormControl>
        <Button type="submit" onClick={(e)=>handleSubmit()}>Submit</Button>
      </FormGroup>
    </>
  )
})
