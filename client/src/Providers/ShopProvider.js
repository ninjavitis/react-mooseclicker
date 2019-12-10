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

  wrappedItems = (items) => {
    return items.map(item => {return {item:{item}, price:null}})
  }


  render(){
    return(
    <ShopContext.Provider value ={{
      ...this.state,
      fetchCollectibles:this.fetchCollectibles,
      wrappedCollectibles:this.wrappedItems(this.state.collectibles),
    
    }}>
      {this.props.children}
    </ShopContext.Provider>
    )
  }
}