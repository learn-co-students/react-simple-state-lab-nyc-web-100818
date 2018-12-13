import React from 'react';

class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  updateColor = (event) => {
    console.log("color update triggered")
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div onClick={this.updateColor} className="cell" style={{backgroundColor: this.state.color}}></div>
    )
  }

}

export default Cell;
