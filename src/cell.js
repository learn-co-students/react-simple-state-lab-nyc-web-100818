import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {color: props.value}
  }

  handleClick = (event) => {
    const newColor = '#333';
    this.setState({
      color: newColor
    })
    // this.state.color = '#333'
  }

  render() {
    return (
      <div
      className="cell"
      style={{backgroundColor: this.state.color}}
      onClick={this.handleClick}
      ></div>
    )
  }
}
