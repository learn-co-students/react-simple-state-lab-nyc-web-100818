import React, { Component } from 'react';
import Cell from './Cell.js'
export default class Matrix extends Component {
  
  genRow = (vals, index) => (
    // vals.map((val, index) => <div className="cell" key={index}></div>) // replace me and render a cell component instead!
    vals.map((val, index) => <Cell value={val} key={index} />) 
  )
  
  genMatrix = () => (
    this.props.values.map((rowVals, index) => <div className="row" key={index} >{this.genRow(rowVals)}</div>)
  )
  
  render() {
    console.log(this.props.values)
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }  
}

Matrix.defaultProps = {
  values: [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]
}