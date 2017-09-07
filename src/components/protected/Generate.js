import React, {Component} from 'react'

class Generate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: props.name,
      x: props.x,
      y: props.y,
      z: props.z
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      x: nextProps.x,
      y: nextProps.y,
      z: nextProps.z
    })
  }

  render () {
    if (this.state.x && this.state.y && this.state.z) {
      const priceArrParseInt = this.state.x.map(price => +price)
      const rsiParseInt = this.state.y.map(rsi => +rsi)
      const adxParseInt = this.state.z.map(adx => +adx)

      const y = priceArrParseInt
      const xRSI = rsiParseInt
      const xADX = adxParseInt

      var predictRSI = xRSI[0]
      var predictADX = xADX[0]
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
      console.log(minus, 'minus')

      // second =================================
      // finding Σx
      var sumX = xADX.reduce(
          (acc, cur) => acc + cur
        )
      console.log(sumX, 'Σx')

      // finding Σx2
      var XSqr = xADX.map(function (x) {
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
      var boom = xADX.map(function (x, index) { // here x = a[index]
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

      var predict2 = parseFloat(a + (b * predictADX)).toFixed(2)

      console.log(predict2, ' Brian, Shaun and Jerald were here beeches')

      var minus2 = priceYTD - predict2

      if (minus2 > 0) {
        var prediction2 = 'Price will drop'
      } else {
        prediction2 = 'Price will rise'
      }
      console.log(minus2, 'minus2')
    }

    return (

      <div>
        <h3>RSI says: {prediction}</h3>
        <h3>ADX says: {prediction2}</h3>
        {/* <input placeholder='Enter historical price' name='hxprice'></input> */}

        <br /><br /><br /><br />
      </div>
    )
  }

}

export default Generate
