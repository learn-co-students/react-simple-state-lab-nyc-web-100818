import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  // need to make a method that uses setState
  // we are changing the INITIAL state that was set in the constructor
  // going to call this method on this below in the render
  handleClicks = () => {
    this.setState({
      color: '#333'
    })
  }


  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClicks}>
      </div>
    )
  }

}
