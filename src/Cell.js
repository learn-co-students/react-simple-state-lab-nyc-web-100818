import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
  }

  handleClick = () => {
    const clickedColor = '#333'
    this.setState({ color: clickedColor })
  }

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    )
  }
}
