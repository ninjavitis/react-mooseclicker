import React from 'react';
import axios from 'axios';

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component {
  state={
    clicks:0,
    user:{remainingClicks:0,points:0},
    defaultCollectible:{name:'Cool-lectible', type:'', tier:'0', clicks:0, variant:'', magic:false, clicksToLevel:1, level:1},
    activeCollectible:{name:'Cool-lectible', type:'', tier:'0', clicks:0, variant:'', magic:false, clicksToLevel:1, level:1,},
    collection:[],
    collectibles:[],
    tab:0,
    shops:[
      {name:'',items:[]},
      {name:'',items:[]},
      {name:'',items:[]},
    ]
  }

  setUser = (user) => this.setState({user:user})
  setCollectibles = (collectibles) => this.setState({collectibles:collectibles})
  setCollection = (collection) => this.setState({collection:collection})
  clearCollectible = () => this.setState({activeCollectible:this.state.defaultCollectible})
  setShops = (shops) => this.setState({shops:shops})
  setTab = (tab) => this.setState({tab:tab})
  
  setActiveCollectible = (collectible) => {
    this.setState({activeCollectible:collectible})
  }
  
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

  updateActiveCollectible = (id) => {
    axios.put('/api/users/updateActive', {activeCollectible:id})
    .then(res=>this.setActiveCollectible(res.data))
    .catch(res => console.log(res))
  }

  // Gets the currently active collectible from the database
  fetchActiveCollecitble = () => {
    axios.get('/api/collectibles/show')
    // .then(res => console.log(res.data))
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

  //  old shop provider methods
  fetchCollectibles = () => {
    axios.get('api/collectibles')
    .then(res => this.setCollectibles(res.data))
    .catch(res => console.log(res))
  }

  collectionSize = () => this.state.collection.length

  // wraps collectible item with additional shop data
  wrappedItems = (items) => {
    return items.map(item => {return {item, price:7777.77}})
  }

  newCollectible=(cType) => {
    axios.post('/api/collectibles/create/', {ctype_id:cType})
    .then(res => console.log(res.data))
  }

  fetchItems =() => {
    axios.get('api/items')
    .then(res => this.setShops(res.data))
    .catch(res => console.log(res))
  }


  // only here for testing the endpoint.  adding points should handled server side
  addPoints = (points) => {
    axios.put('/api/users/addPoints/', {points:points})
    .then(res => console.log(res.data))
  }

    // only here for testing the endpoint.  removing points should handled server side
  subPoints = (points) => {
    axios.put('/api/users/subPoints/', {points:points})
    .then(res => console.log(res.data))
  }

  // only here for testing the endpoint.  adding points should handled server side
  addClicks = (clicks) => {
    axios.put('/api/users/addClicks/', {remainingClicks:clicks})
    .then(res => console.log(res.data))
  }

    // only here for testing the endpoint.  removing points should handled server side
  subClicks = (clicks) => {
    axios.put('/api/users/subClicks/', {remaining_clicks:clicks})
    .then(res => console.log(res.data))
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
      updateActiveCollectible:this.updateActiveCollectible,
      fetchCollectibles:this.fetchCollectibles,
      collectionSize:this.collectionSize,
      wrappedCollectibles:this.wrappedItems(this.state.collectibles),
      newCollectible:this.newCollectible,
      fetchItems:this.fetchItems,
      inventories:[
        {name:'Points',items:this.state.pointsItems}, 
        {name:'Collectibles',items:this.state.collectibleItems}, 
        {name:'Clicks',items:this.state.clicksItems},
      ],
      setTab:this.setTab,
      addPoints:this.addPoints,
      subPoints:this.subPoints,
      addClicks:this.addClicks,
      subClicks:this.subClicks,
    }}>
      {this.props.children}
    </AppContext.Provider>
    )
  }
}