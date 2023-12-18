import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 1
        }
    }

    counter() {
        // this.setState ({
        //     count: this.state.count + 1
        // })

        this.setState((prevState) => ({
            count: prevState.count + 1
        })
        )
    }

    incrementFive() {
        this.counter()
        this.counter()
        this.counter()
        this.counter()
        this.counter()
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
