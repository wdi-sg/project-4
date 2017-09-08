import React, {Component} from 'react'
import Generate from './Generate'

class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      priceArr: [],
      rsiArr: props.rsi,
      adxArr: props.adx
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      rsiArr: nextProps.rsi,
      adxArr: nextProps.adx
    })
  }

  render () {

    return (
      <div>
        <Generate x={this.state.priceArr} y={this.state.rsiArr} z={this.state.adxArr}/>

      </div>
    )
  }
  componentDidMount () {
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=full&apikey=D2E5ZAQU25U0NKAE'

    fetch(url)
    .then((response) => { // promise is resolved, and response is received
      return response.json() // convert response.body into json format
    })

    .then((data) => {
      var obj = (data['Time Series (Daily)'])
      var randomArr = []
      for (var prop in obj) {
        randomArr.push(obj[prop])
      }
      const newArr = randomArr.slice(0, 200).map((indicator, index) => {
        return indicator[('4. close')]
      })
      this.setState({
        priceArr: newArr
      })
      // console.log(this.state.priceArr)
    })

    .catch((err) => {
      console.log('err', err) // just in case if api call fails
    })
  }

}

export default Counter
