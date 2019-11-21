import React from 'react';
import axios from 'axios';

export const MooseContext = React.createContext()
export const MooseConsumer = MooseContext.Consumer

export class MooseProvider extends React.Component {
  state={clicks:0, activeMoose:{}}

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

  getActiveMoose=()=>{
    axios
    .get('/api/activeMoose')
    .then(res => this.setState({activeMoose:res.data}))
    .catch(res => console.log(res))
    return this.state.activeMoose
  }

  render(){
    return(
    <MooseContext.Provider value ={{
      ...this.state,
      getClickCount:this.getClickCount,
      mooseInteraction:this.mooseInteraction,
      activeMoose:this.getActiveMoose,
    }}>
      {this.props.children}
    </MooseContext.Provider>
    )
  }
}