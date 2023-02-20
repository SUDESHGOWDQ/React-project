import React, { Component } from 'react'
export default class State extends Component {
    constructor(){
        super()
        this.state = {Message:"Welcome to React😊",
                      Count:0,
                    color:"red"}
    }
    change(){
        this.setState({Message:"Thank you❤"})
    }
    increment(){
        this.setState({Count:this.state.Count+1})
    }
    color(){
        this.setState({color:"blue"})
    }
  render() {
    return (
      <div>
      <h1 style={{color:`${this.state.color}`}}>Count:{this.state.Count}</h1>
      <h1>{this.state.Message}</h1>
      <button onClick={()=>this.change()}>Click</button>
      <button onClick={()=>this.increment()}>Increment</button>
      <button onClick={()=>this.color()}>Color</button>
      </div>
    )
  }
}
