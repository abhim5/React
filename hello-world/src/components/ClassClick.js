import React, { Component } from 'react'

class ClassClick extends Component {
    handler() {
        console.log("Class Button clicked")   
    }
    render() {
    return (
      <div>
        <button onClick={this.handler}>Click</button>
      </div>
    )
  }
}

export default ClassClick
