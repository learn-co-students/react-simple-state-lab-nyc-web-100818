import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props) {
    super(props)
      this.state = {
        color: this.props.value
      }
  }

  handleClick = (event) => {
    let defaultColor = '#333'
    this.setState(
      { color: defaultColor}
    )
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick} >
      </div>
    )
  }
}//end of cell component
