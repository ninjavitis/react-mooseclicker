import React from 'react';
import axios from 'axios'


export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { 
    user:null,
    emptyUser:{remainingClicks:0,points:0},
    loginSuccessful:true, 
    points:0, 
    clicks:0, 
    remainingClicks:0,
    activeMoose:null
  }


  getClickCount=()=>{
    axios.get('/api/moose/clickcount')
  .then(res=>this.setState({clicks:res.data}))
  }
  
  getPoints=()=>{
    axios.get('/api/moose/getPoints')
    .then(res=>this.setState({clicks:res.data}))
  }

  handleRegister=(user, history)=>{
    axios.post("/api/auth", user)
    .then(res=> {
      this.setState({user: res.data.data})
      history.push('/')
    })
    .catch(res => {
      console.log(res)
      this.setState({loginSuccessful:false})
    })
  }

  handleLogin=(user, history)=>{
    axios.post('/api/auth/sign_in', user)
    .then(res => { 
      this.setState({user:res.data.data})
    })
    .catch(err => {
      console.log('err.response')
    })
  }

  handleLogout=(history)=>{
    axios.delete('/api/auth/sign_out')
    .then(res=>{
      this.setState({user:null})
      this.setState({clicks:0})
    })
    .catch(res=>{console.log(res)})
  }

  getUser=()=>{
    if (this.state.user){
      return this.state.user
    } else {
      return this.state.emptyUser
    }
  }

  // Updates the user object from the UI (ex: when user is returned after clicking a moose)
  updateUser=(user)=>{
    this.setState({user:user})
  }

  render() {
    return (
      <AuthContext.Provider
      value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        getUser: this.getUser,
        updateUser:this.updateUser,
        user:this.state.user,
        setUser:(user) => this.setState({user, })
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

