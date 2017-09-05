import React, {Component} from 'react'
import Enemy from './Enemy'
import SimpleLinearRegression from 'ml-regression-simple-linear'

class Generate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: props.name,
      x: props.x,
      y: props.y
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      x: nextProps.x,
      y: nextProps.y
    })
  }

  render () {
    let regression, slope, toStr, predict
    if (this.state.x && this.state.y) {
      const priceArrParseInt = this.state.x.map(price => +price)
      const rsiParseInt = this.state.y.map(rsi => +rsi)

      const y = priceArrParseInt
      const xRSI = rsiParseInt
      var predictRSI = xRSI[0]
      var priceYTD = y[0]

      regression = new SimpleLinearRegression(xRSI, y)
      slope = regression.slope
      toStr = regression.toString()
      predict = parseFloat(regression.predict(predictRSI)).toFixed(2)

      var minus = priceYTD - predict

      if (minus > 0) {
        var prediction = 'Price will drop'
      } else {
        var prediction = 'Price will rise'
      }
    }

    return (
      <div>
        <h3>Slope: {slope}</h3>
        <h3>Equation: {toStr}</h3>
        <h3>Predicted Price Tomorrow: US${predict}</h3>
        <h3>{prediction}</h3>
      </div>
    )
  }

}

export default Generate
