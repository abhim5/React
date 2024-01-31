import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Abhishek'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Abhishek'
            })
        }, 2000)
    }
    
  render() {
      console.log('******************** Parent Comp ********************')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp
