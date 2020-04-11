import React from 'react';
import axios from 'axios';

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

export class AppProvider extends React.Component {
  state={
    clicks:0,
    user:{remainingClicks:0,points:0},
    defaultCollectible:{id:'', type:'Cool-lectible', tier:'0', clicks:0, variant:'', magic:false, clicksToLevel:1, level:1},
    activeCollectible:{id:'', type:'Cool-lectible', tier:'0', clicks:0, variant:'', magic:false, clicksToLevel:1, level:1,},
    collection:[],
    collectibles:[],
    validSets:[],
    hand:[],
    tab:0,
    shops:[
      {name:'',items:[]},
      {name:'',items:[]},
      {name:'',items:[]},
    ],
    sets:[ 
      { name: 'Two of a Kind', 
        requirements:[
            { type:'any', quantity:2, minClicks:0 },
        ], 
        rewards:['joy',]
      },
      { name: '3 of a Kind', 
        requirements:[
            { type:'any', quantity:3, minClicks:0 },
        ], 
        rewards:['more joy',]
      },
      { name: 'Full House', 
        requirements:[
            { type:'any', quantity:2, minClicks:0 },
            { type:'any', quantity:3, minClicks:0 },
        ], 
        rewards:['even more joy',]
      },
      { name: '10 click Full House', 
        requirements:[
            { type:'any', quantity:2, minClicks:10 },
            { type:'any', quantity:3, minClicks:10 },
        ], 
        rewards:['even more joy',]
      },
    ],
  }

  // manages application tabs
  setTab = (tab) => this.setState({tab:tab})

  ////////////////////////
  // User Management
  /////////
  setUser = (user) => this.setState({user:user})

  // Updates the user object (ex: update click counter after clicking an item)
  fetchUser = () => {
    axios.get('/api/user/show')
    .then(res => this.setUser(res.data))
    .catch(res => console.log(res))
  }


  ////////////////////////
  // Shop Management - Shop system is getting complete refactor
  /////////
  setShops = (shops) => this.setState({shops:shops})

  fetchItems =() => {
    axios.get('api/items')
    .then(res => this.setShops(res.data))
    .catch(res => console.log(res))
  }

  // TODO remove this - wraps collectible item with additional shop data
  wrappedItems = (items) => {
    return items.map(item => {return {item, price:7777.77}})
  }


  ////////////////////////
  // Item Management
  /////////
  newCollectible=(cType) => {
    axios.post('/api/collectibles/create/', {ctype_id:cType})
    .then(res => console.log(res.data))
  }

  setActiveCollectible = (collectible) => {
    this.setState({activeCollectible:collectible})
  }

  clearCollectible = () => this.setState({activeCollectible:this.state.defaultCollectible})

  getClickCount=()=>{
    axios.get('/api/moose/clickcount')
    .then(res => this.setState({clicks:res.data}))
    return this.state.clicks
  }

  clickCollectible = () => {
    axios.put("/api/collectibles/click")
    .then(res => {
        // console.log(res.data)
        this.setActiveCollectible(res.data.collectible)
        this.setUser(res.data.user)
      })
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


  ////////////////////////
  // Collection Management
  /////////
  setCollectibles = (collectibles) => this.setState({collectibles:collectibles})
  setCollection = (collection) => this.setState({collection:collection})

  // Gets the collection for the currently logged in user
  fetchCollection = () => {
    axios.get('api/collectibles/myCollection')
    .then(res => this.setCollection(res.data))
    .catch(res => console.log(res))
  }

  // Supports ascending/descending sort
  sortCollection = (key, direction) => {
    let sorted = this.state.collection.slice().sort((item1,item2) => {
      if(typeof item1[key] == "number"){
        return(
          (item1[key] - item2[key]) * direction
        )
      } else {
        return(
          (item1[key] < item2[key]) ? -1 * direction : ((item1[key] > item2[key]) ? 1 * direction : 0)
        )
      }
    })
    this.setCollection(sorted)
  }

  collectionSize = () => this.state.collection.length


  /////////////////////////
  // Hand management
  ///////
  addToHand = (id) => {
    // Each item can only be added to the hand once
    if (this.inHand(id)) {return} 
    
    if (this.state.collection.length > 0){
      const item = this.state.collection.filter(i => i.id === id)[0]
      this.setState({hand:[item, ...this.state.hand]})
    }
    
    // then update the list of sets that are completable by this hand
    this.setValidSets(this.validateSets())
  }
  
  // remove a specific item from the hand
  removeFromHand = (id) => {
    const newHand = this.state.hand.filter(item => item.id !== id) 
    this.setState({hand:newHand})
  }
  
  clearHand = () => {
    this.setState({hand:[]})
    this.clearValidSets()
  }

  // used by the item cards to set the 'in hand' styling
  inHand = (itemID) => Boolean(this.state.hand.find(({id}) => id === itemID))
  
  // Returns an array of the quantities of each type of card in the hand
  tallyHand = () => {
    let tally = []
      this.state.hand.forEach(item => {
        tally.find(({type},i) => type === item.type && tally[i].quant++) || tally.push({type:item.type, quant:1})
      })

    return tally
  }

  //////////////////////
  // Set Management
  //////

  /* ***

    Set Validation works thusly:
      1. Determine how many cards of each type are in the hand.

      2. Get subset of 'Sets' where hand size equals the number of cards in the set
        (ie exclude sets that have more or less cards than are currently in the hand)
      
      3.  Filter set list by card types that match
        (ie return list of sets that have the right type and quantity of cards)

      4. Display all valid sets to the player

      5.  Pass the hand object + selected set to the back end to complete

      6.  Handle response

  *** */

  setValidSets = (validSets) => this.setState({validSets:validSets})
  clearValidSets = () => this.setValidSets([])

  getSetSize = (setReqs) => {
  let setSize = 0

  setReqs.map(req => {
    setSize += req.quantity
  })
  // console.log('set size: ' + setSize)
  return setSize
}

  validateSets = (sets) => {
    let tally = this.tallyHand()
    let preFilteredSets = []
    let validSets = []

    // no set has less than 2 cards
    if (this.state.hand.length > 1){
      // prefilter sets
    this.state.sets.map((set, i) => {
      // only include sets with the same number of cards as in the hand
      // only include sets with the same number of card types as in the hand
      let preFilters = Boolean(
        this.getSetSize(set.requirements) >= this.state.hand.length
        &&
        set.requirements.length >= tally.length
      )

      preFilters && preFilteredSets.push(i)
    })
    }

    if (preFilteredSets.length > 0){
      tally.map(element => {
        validSets = preFilteredSets.map(setNum => {
          let itemFound = Boolean(this.state.sets[setNum].requirements.find(({type}) => type === 'any' || type === element.type))
          if(itemFound){
            return setNum
          } else {
            console.log('no match')
          }
        })
      })
    }
    return validSets
  }

 /////////////////////
 // Testing + Deprecated
 ///////

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

    //  old shop provider methods
    fetchCollectibles = () => {
      axios.get('api/collectibles')
      .then(res => this.setCollectibles(res.data))
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
      sortCollection:this.sortCollection,
      fetchActiveCollectible:this.fetchActiveCollecitble,
      clearCollectible:this.clearCollectible,
      clickCollectible:this.clickCollectible,
      updateActiveCollectible:this.updateActiveCollectible,
      fetchCollectibles:this.fetchCollectibles,
      collectionSize:this.collectionSize,
      addToHand:this.addToHand,
      clearHand:this.clearHand,
      inHand:this.inHand,
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