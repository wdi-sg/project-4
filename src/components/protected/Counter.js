import React, {Component} from 'react'
import Enemy from './Enemy'
import SimpleLinearRegression from 'ml-regression-simple-linear'
import Generate from './Generate'

class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      priceArr: [],
      rsiArr: props.rsi
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      rsiArr: nextProps.rsi
    })
  }

  render () {
    let allPrices = this.state.priceArr.map((number, index) => {
      return <Enemy key={index} name={number} />
    })

    return (
      <div>
        {/* <ul>Price: {allPrices}</ul> */}
        <Generate x={this.state.priceArr} y={this.state.rsiArr} />

      </div>
    )
  }
  componentDidMount () {
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=15min&outputsize=full&apikey=D2E5ZAQU25U0NKAE'

    fetch(url)
    .then((response) => { // promise is resolved, and response is received
      // console.log('response', response)
      return response.json() // convert response.body into json format
    })

    .then((data) => {
      var obj = (data['Time Series (15min)'])
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
      console.log(this.state.priceArr)
    })

    .catch((err) => {
      console.log('err', err) // just in case if api call fails
    })
  }

}

export default Counter
