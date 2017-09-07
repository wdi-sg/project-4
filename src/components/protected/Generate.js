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
      // console.log(sumY, 'Σy')

      // finding Σx
      var sumX = xRSI.reduce(
          (acc, cur) => acc + cur
        )
      // console.log(sumX, 'Σx')

      // finding Σx2
      var XSqr = xRSI.map(function (x) {
        return x * x
      })
      var sumXSqr = XSqr.reduce(
          (sum, val) => sum + val
        )
      // console.log(sumXSqr, 'Σx2')

      // finding n = sample size
      var ss = y.length
      // console.log(ss, 'this is sample size')

      // finding Σxy
      var boom = xRSI.map(function (x, index) { // here x = a[index]
        return y[index] * x
      })

      var sumXY = boom.reduce(
          (sum, val) => sum + val
        )
      // console.log(sumXY, 'Σxy')

      var a1 = (sumY * sumXSqr) - (sumX * sumXY)
      var a2 = (ss * sumXSqr) - (sumX * sumX)
      var a = a1 / a2
      // console.log(a)

      var b1 = (ss * sumXY) - (sumX * sumY)
      var b2 = a2
      var b = b1 / b2
      // console.log(b)

      var rsiPredicts = parseFloat(a + (b * predictRSI)).toFixed(2)

      var minus = priceYTD - rsiPredicts

      if (minus > 0) {
        var prediction = 'Price is expected to drop in the forseeable future'
      } else {
        prediction = 'Price is expected to rise in the forseeable future'
      }

      console.log(minus, 'minus')

      // Regression for ADX =================================
      // finding Σx
      var sum2X = xADX.reduce(
          (x1, x2) => x1 + x2
        )

      // finding Σx2
      var XSqr2 = xADX.map(function (x) {
        return x * x
      })
      var sum2XSqr = XSqr2.reduce(
          (x1, x2) => x1 + x2
        )

      // finding n = sample size
      var ss2 = y.length

      // finding Σxy
      var priceADX = xADX.map(function (x, index) { // here x = a[index]
        return y[index] * x
      })

      var sum2XY = priceADX.reduce(
          (x1, x2) => x1 + x2
        )

      var a4 = (sumY * sum2XSqr) - (sum2X * sum2XY)
      var a5 = (ss2 * sum2XSqr) - (sum2X * sum2X)
      var a3 = a4 / a5

      var b4 = (ss2 * sum2XY) - (sum2X * sumY)
      var b5 = a5
      var b3 = b4 / b5

      var adxPredicts = parseFloat(a3 + (b3 * predictADX)).toFixed(2)

      var minus2 = priceYTD - adxPredicts

      if (minus2 > 0) {
        var prediction2 = 'Price is expected to drop in the forseeable future'
      } else {
        prediction2 = 'Price is expected to rise in the forseeable'
      }

      var predictedArr = [rsiPredicts, adxPredicts].reduce(
        (p1,p2) => p1 * p2
      )

      var predictedPrice = parseFloat(Math.pow(predictedArr, 1/2)).toFixed(4)


      //  ==============================================================
      // finding Geometric Mean of RSI

     var geoVariables = xRSI.map(function (x) {
        return parseFloat(Math.pow(x, (1/xRSI.length))).toFixed(2)
      })
      var geoRSI = geoVariables.reduce(
          (sum, val) => sum * val
        )
     var deviation = 50 - geoRSI

     var newTop = parseFloat(70 - deviation).toFixed(2)
      var newLow = parseFloat(30 - deviation).toFixed(2)
    }

    return (

      <div className='generate'>
        <h3><strong>RSI says: </strong> <br/><span className='prediction'>{prediction}</span></h3>

        <h3><strong>ADX says: </strong> <br/><span className='prediction'>{prediction2}</span></h3>
        <h3><strong>Estimated Price :</strong> <br/>US${predictedPrice}<span className='bracket'> (Based on Geometric Mean)</span></h3>
        <h3><strong>Price Adjusted Range: </strong><br/>
        <strong className='red'>Overbought: </strong>{newTop}%
        <strong className='green'> Oversold: </strong>{newLow}%
        </h3>


        <br /><br /><br /><br />
      </div>
    )
  }

}

export default Generate
