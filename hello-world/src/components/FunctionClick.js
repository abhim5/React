import React from 'react'

function FunctionClick() {
    function handler() {
        console.log("Fun Button clicked")
    }
    return (
        <div>
            <button onClick={handler }>Click</button>
        </div>
  )
}

export default FunctionClick
