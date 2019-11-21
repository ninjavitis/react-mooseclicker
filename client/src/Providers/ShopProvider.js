import React from 'react';
import axios from 'axios';

export const ShopContext = React.createContext()
export const ShopConsumer = ShopContext.Consumer

export class ShopProvider extends React.Component {
  // Buy Moose

  // Buy Points

  // Buy Clicks


  render(){
    return(
    <ShopContext.Provider value ={{
      ...this.state,
      
    }}>
      {this.props.children}
    </ShopContext.Provider>
    )
  }
}