import React from 'react';
import axios from 'axios';

export const MooseContext = React.createContext()
export const MooseConsumer = MooseContext.Consumer

export class MooseProvider extends React.Component {
  state={clicks:0}

  getClickCount=()=>{
    axios.get('/api/moose/clickcount')
    .then(res=>this.setState({clicks:res.data}))
    return this.state.clicks
  }

  render(){
    return(
    <MooseContext.Provider value ={{
      ...this.state,
      getClickCount:this.getClickCount
    }}>
      {this.props.children}
    </MooseContext.Provider>
    )
  }
}