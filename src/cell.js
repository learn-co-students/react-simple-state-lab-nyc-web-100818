import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
  }

  handleClicking = (event) => {
    const newColor = '#333'
    this.setState({
      color: newColor
    })
  }

  //wrap all events in a div and return with parens
  render(props) {
    return (
      <div
      onClick={this.handleClicking}
      className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
