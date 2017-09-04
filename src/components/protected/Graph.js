import React, { Component } from 'react'

const Graph = (props) => {
  // let graphObj = { x: props.time, y: props.rsi }

  return (
    <div>
      <li>
        Obj: { props.time } || { props.rsi }
      </li>
    </div>
  )
}

export default Graph
