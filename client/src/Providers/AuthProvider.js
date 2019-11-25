import React from 'react';
import axios from 'axios'


export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user:null, loginSuccessful:true, points:0, clicks:0, remainingClicks:0,activeMoose:null}


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
      this.setState({clicks:res.data.data.mooseclicks})
      this.setState({reamaingingClicks:res.data.data.remainingClicks})
      history.push('/')
    })
    .catch(res => {
      console.log(res)
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

  render() {
    return (
      <AuthContext.Provider
      value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        clicks: this.state.clicks,
        remainingClicks: this.state.remainingClicks,
        points: this.state.points,
        setUser:(user) => this.setState({user, })
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

