import React from 'react';
import axios from 'axios';

export const ShopContext = React.createContext()
export const ShopConsumer = ShopContext.Consumer

export class ShopProvider extends React.Component {
  state ={
    collectibles:[],
  }

  setCollectibles = (collectibles) => this.setState({collectibles:collectibles})
  // Buy Moose

  // Buy Points

  // Buy Clicks

  fetchCollectibles = () => {
    axios.get('api/collectibles')
    .then(res => this.setCollectibles(res.data))
    .catch(res => console.log(res))
  }

  // wraps collectible item with additional shop data
  wrappedItems = (items) => {
    return items.map(item => {return {item, price:7777.77}})
  }

  newCollectible=(cType) => {
    axios.post('/api/collectibles/create/', {cType_id:cType})
    .then(res => console.log(res.data))
  }


  render(){
    return(
    <ShopContext.Provider value ={{
      ...this.state,
      fetchCollectibles:this.fetchCollectibles,
      wrappedCollectibles:this.wrappedItems(this.state.collectibles),
      newCollectible:this.newCollectible
    
    }}>
      {this.props.children}
    </ShopContext.Provider>
    )
  }
}