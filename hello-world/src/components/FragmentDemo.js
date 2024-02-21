import React from 'react'

function FragmentDemo() {
  return (
    // Fragments helps us to write cleaner code. For ex there will be 2 divs in the page if we inspect even though we have
    // only one div. "React.Fragment" will help us to write only one div. 
    <React.Fragment>      
        <h1>
            FragmentDemo
        </h1>
        <p>This the the FragmentDemo paragraph</p>
    </React.Fragment>
  )
}

export default FragmentDemo
