import React from 'react';
import axios from 'axios';

export const MooseContext = React.createContext()
export const MooseConsumer = MooseContext.Consumer

export class MooseProvider extends React.Component {
  render(){
    return(
    <MooseContext.Provider value ={{
      ...this.state,
      
    }}>
      {this.props.children}
    </MooseContext.Provider>
    )
  }
}