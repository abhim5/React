import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

  render() {
    const { count, incrementCount, name } = this.props
      return (
          <div>
              <button onClick={incrementCount}><h1>{name} Clicked {count} times</h1></button>
          </div>
      )
  }
}

export default withCounter(ClickCounter, 5)
