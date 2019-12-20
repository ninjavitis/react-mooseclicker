import React, {useContext} from 'react';
import axios from 'axios';


export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component {
  state={
    clicks:0,
    user:{remainingClicks:0,points:0},
    defaultCollectible:{name:'', type:'', clicks:0, variant:'', magic:false, clicksToLevel:0, level:0, age:0},
    activeCollectible:{name:'', type:'', clicks:0, variant:'', magic:false, clicksToLevel:0, level:0, age:0},
    collection:[],
  }

  setUser = (user) => this.setState({user:user})
  setCollection = (collection) => this.setState({collection:collection})
  setActiveCollectible = (collectible) => this.setState({activeCollectible:collectible})
  clearCollectible = () => this.setState({collectible:this.state.defaultCollectible})

  getClickCount=()=>{
    axios.get('/api/moose/clickcount')
    .then(res => this.setState({clicks:res.data}))
    return this.state.clicks
  }

  clickCollectible = () => {
    axios.put("/api/collectibles/click")
    .then(res => 
      {
        // console.log(res.data)
        this.setActiveCollectible(res.data.collectible)
        this.setUser(res.data.user)
      }
    )
  }

  // Gets the currently active collectible from the database
  fetchActiveCollecitble = () => {
    axios.get('/api/collectibles/show')
    .then(res => this.setActiveCollectible(res.data))
    .catch(res => console.log(res))
  }

  // Updates the user object (ex: when user is returned after clicking a moose)
  fetchUser = () => {
    axios.get('/api/user/show')
    .then(res => this.setUser(res.data))
    .catch(res => console.log(res))
  }

  fetchCollection = () => {
    axios.get('api/collectibles/myCollection')
    .then(res => this.setCollection(res.data))
    .catch(res => console.log(res))
  }

  render(){
    return(
    <AppContext.Provider value ={{
      ...this.state,
      getClickCount:this.getClickCount,
      getUser:this.getUser,
      fetchUser:this.fetchUser,
      fetchCollection:this.fetchCollection,
      fetchActiveCollectible:this.fetchActiveCollecitble,
      clearCollectible:this.clearCollectible,
      clickCollectible:this.clickCollectible,
    }}>
      {this.props.children}
    </AppContext.Provider>
    )
  }
}