import React, { Component } from 'react';

class Cell extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: props.value
    }
  }

  color = () => {
    this.setState({
      color: '#333'
    })
  }

  render(){
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.color}>
        hi
      </div>
    )
  }
}
export default Cell;
