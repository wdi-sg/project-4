import React, { Component } from 'react'

const Graph = (props) => (
  <div>
    <li>
      {props.time}:{props.rsi}
    </li>
  </div>
)

export default Graph
