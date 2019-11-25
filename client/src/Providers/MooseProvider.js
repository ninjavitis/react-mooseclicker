import React from 'react';
import axios from 'axios';

export const MooseContext = React.createContext()
export const MooseConsumer = MooseContext.Consumer

export class MooseProvider extends React.Component {
  state={
    clicks:0,
    defaultMoose:{name:'', type:'', clicks:0, variant:'', magic:false, clicksToLevel:0, level:0, age:0 }, 
    activeMoose:{name:'', type:'', clicks:0, variant:'', magic:false, clicksToLevel:0, level:0, age:0 },
  }

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

  getActiveMoose = () => {
    axios
    .get('/api/moose/show')
    .then(res => this.setState({activeMoose:res.data}))
    .catch(res => console.log(res))
  }

  clearMoose = () => {
    this.setState({activeMoose:this.state.defaultMoose})
  }
  
  render(){
    return(
    <MooseContext.Provider value ={{
      ...this.state,
      getClickCount:this.getClickCount,
      mooseInteraction:this.mooseInteraction,
      getActiveMoose:this.getActiveMoose,
      activeMoose:this.state.activeMoose,
      clearMoose:this.clearMoose
    }}>
      {this.props.children}
    </MooseContext.Provider>
    )
  }
}