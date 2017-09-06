import React, {Component} from 'react'

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
    if (this.state.x && this.state.y) {
      const priceArrParseInt = this.state.x.map(price => +price)
      const rsiParseInt = this.state.y.map(rsi => +rsi)

      const y = priceArrParseInt
      const xRSI = rsiParseInt
      var predictRSI = xRSI[0]
      var priceYTD = y[0]

      // finding Σy
      var sumY = y.reduce(
          (acc, cur) => acc + cur
        )
      console.log(sumY, 'Σy')

      // finding Σx
      var sumX = xRSI.reduce(
          (acc, cur) => acc + cur
        )
      console.log(sumX, 'Σx')

      // finding Σx2
      var XSqr = xRSI.map(function (x) {
        return x * x
      })
      var sumXSqr = XSqr.reduce(
          (sum, val) => sum + val
        )
      console.log(sumXSqr, 'Σx2')

      // finding n = sample size
      var ss = y.length
      console.log(ss, 'this is sample size')

      // finding Σxy
      var boom = xRSI.map(function (x, index) { // here x = a[index]
        return y[index] * x
      })

      var sumXY = boom.reduce(
          (sum, val) => sum + val
        )
      console.log(sumXY, 'Σxy')

      var a1 = (sumY * sumXSqr) - (sumX * sumXY)
      var a2 = (ss * sumXSqr) - (sumX * sumX)
      var a = a1 / a2
      console.log(a)

      var b1 = (ss * sumXY) - (sumX * sumY)
      var b2 = a2
      var b = b1 / b2
      console.log(b)

      var predict = parseFloat(a + (b * predictRSI)).toFixed(2)

      console.log(predict, ' Brian, Shaun and Jerald were here beeches')

      var minus = priceYTD - predict

      if (minus > 0) {
        var prediction = 'Price will drop'
      } else {
        prediction = 'Price will rise'
      }
    }

    return (
      <div>
        Regression suppose to be here
         {/* <h3>Slope: {slope}</h3>
        <h3>Equation: {toStr}</h3>
        <h3>Predicted Price Tomorrow: US${predict}</h3>
        <h3>{prediction}</h3> */}
        <h3>{prediction}</h3>
      </div>
    )
  }

}

export default Generate
