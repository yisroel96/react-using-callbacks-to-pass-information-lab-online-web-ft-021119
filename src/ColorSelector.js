import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  handleClick = (event) => {
    this.props.setColor(event.target.attributes.alt.value)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} alt={str} onClick={this.handleClick}/>
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}