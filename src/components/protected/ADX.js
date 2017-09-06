import React, {Component} from 'react'

class ADX extends Component {
  constructor (props) {
    super(props)

    this.state = {
      adxArr: []
    }

    this.getADX = props.getADX
  }

  render () {
    return (
      <div />
    )
  }
  componentDidMount () {
    const url2 = 'https://www.alphavantage.co/query?function=ADX&symbol=AAPL&interval=daily&time_period=14&series_type=close&apikey=D2E5ZAQU25U0NKAE'

    fetch(url2)
    .then((response) => { // promise is resolved, and response is received
      // console.log('response', response)
      return response.json() // convert response.body into json format
    })

    .then((data) => {
      var obj = (data['Technical Analysis: ADX'])
      var randomArr = []
      for (var prop in obj) {
        randomArr.push(obj[prop])
      }
      randomArr.map((indicator, index) => {
        if (index < 200) {
          this.setState({
            adxArr: this.state.adxArr.concat(indicator.ADX)
          })
        }
      })
      this.getADX(this.state.adxArr)
    })

    .catch((err) => {
      console.log('err', err) // just in case if api call fails
    })
  }

}

export default ADX
