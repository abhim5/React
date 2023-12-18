import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    //          "First Approach"
    // if(!this.state.isLoggedIn) {
    //     return (
    //         <div>Welcome Abhi!</div>
    //     )
    // }
    // else
    //     return (
    //         <div>Welcome Guest!</div>
    //     )

    //          "Second Approach"
    // return (
        
    //     ! this.state.isLoggedIn ? <div>Welcome Abhi</div> : <div>Welcome Nikki</div>
    // )


    //          "Third Approach"

        return this.state.isLoggedIn && <div>Welcome Driller!</div>


  }
}

export default UserGreeting
