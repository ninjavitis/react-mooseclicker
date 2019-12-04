import React, {useContext} from 'react';
import axios from 'axios';


export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component {
  state={
    clicks:0,
    defaultMoose:{name:'', type:'', clicks:0, variant:'', magic:false, clicksToLevel:0, level:0, age:0 }, 
    activeMoose:{name:'', type:'', clicks:0, variant:'', magic:false, clicksToLevel:0, level:0, age:0 },
    user:{remainingClicks:0,points:0},
  }

  setUser = (user) => this.setState({user:user})
  setActiveMoose = (moose) => this.setState({activeMoose:moose})
  clearMoose = () => this.setState({activeMoose:this.state.defaultMoose})

  getClickCount=()=>{
    axios.get('/api/moose/clickcount')
    .then(res => this.setState({clicks:res.data}))
    return this.state.clicks
  }

  mooseInteraction = () => {
    axios.get("/api/user/click")
    .then(res => 
      {
        // console.log(res.data)
        this.setActiveMoose(res.data.moose)
        this.setUser(res.data.user)
      }
    )
  }

  getActiveMoose = () => {
    axios.get('/api/moose/show')
    .then(res => this.setActiveMoose(res.data))
    .catch(res => console.log(res))
  }

  // Updates the user object from the UI (ex: when user is returned after clicking a moose)
  fetchUser = () => {
    axios.get('/api/users/show')
    .then(res => this.setState({user:res.data}))
    .catch(res => console.log(res))
  }

  render(){
    return(
    <AppContext.Provider value ={{
      ...this.state,
      getClickCount:this.getClickCount,
      mooseInteraction:this.mooseInteraction,
      getActiveMoose:this.getActiveMoose,
      clearMoose:this.clearMoose,
      getUser:this.getUser,
      fetchUser:this.fetchUser, 
    }}>
      {this.props.children}
    </AppContext.Provider>
    )
  }
}