import React from 'react';
import axios from 'axios';

export const MooseContext = React.createContext()
export const MooseConsumer = MooseContext.Consumer

export class MooseProvider extends React.Component {
  state={clicks:0}

  getClickCount=()=>{
    axios.get('/api/moose/clickcount')
    .then(res => this.setState({clicks:res.data}))
    return this.state.clicks
  }

  mooseInteraction = () => {
    axios
    .get("/api/moose/click")
    .then(res => this.setState({clicks:res.data}))
    .catch(res => console.log(res))
  }

  render(){
    return(
    <MooseContext.Provider value ={{
      ...this.state,
      getClickCount:this.getClickCount,
      mooseInteraction:this.mooseInteraction
    }}>
      {this.props.children}
    </MooseContext.Provider>
    )
  }
}