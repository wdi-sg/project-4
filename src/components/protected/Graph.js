import React, { Component } from 'react'

const Graph = (props) => {
  // let graphObj = { x: props.time, y: props.rsi }

  return (
    <div>
      <li>
        Obj: { props.rsiArr } || { props.timeArr }
      </li>
    </div>
  )
}

export default Graph
