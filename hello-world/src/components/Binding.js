import React, { Component } from 'react'

class Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

    //   this.click = this.click.bind(this)
    }
    
    click = () => {
        this.setState({
            message: "Bye now!"
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={this.click}>Click</button>
      </div>
    )
  }
}

export default Binding
