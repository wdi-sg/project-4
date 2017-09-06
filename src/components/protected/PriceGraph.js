import React, {Component} from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'

class PriceGraph extends Component {
  constructor (props) {
    super()
    this.state = {
      priceDataArr: props.priceDataArr,
      symbol: props.symbol
    }
    this.handlePriceDataArrChange = props.handlePriceDataArrChange
    this.handleChange = this.handleChange.bind(this)
  }
  render () {
    let priceData = this.state.priceDataArr
    const option1 = [
      'INTRADAY&interval=5min&outputsize=full',
      'Time Series (5min)',
      79
    ]
    const option2 = [
      'INTRADAY&interval=15min&outputsize=full',
      'Time Series (15min)',
      135
    ]
    const option3 = [
      'INTRADAY&interval=60min&outputsize=full',
      'Time Series (60min)',
      161
    ]
    const option4 = [
      'DAILY&outputsize=full',
      'Time Series (Daily)',
      70
    ]
    const option5 = [
      'DAILY&outputsize=full',
      'Time Series (Daily)',
      130
    ]
    const option6 = [
      'DAILY&outputsize=full',
      'Time Series (Daily)',
      260
    ]
    const option7 = [
      'WEEKLY',
      'Weekly Time Series',
      262
    ]
    const option8 = [
      'WEEKLY',
      'Weekly Time Series',
      523
    ]
    const option9 = [
      'MONTHLY',
      'Monthly Time Series',
      999
    ]
    return (
      <div>
        <h2>Price of Stock</h2>
        <form>
          <label>
            Please select time period:
            <select onChange={this.handleChange}>
              <option value={option1}>24 hrs</option>
              <option value={option2}>5 days</option>
              <option value={option3}>1 month</option>
              <option value={option4}>3 months</option>
              <option value={option5}>6 months</option>
              <option value={option6}>1 year</option>
              <option value={option7}>5 years</option>
              <option value={option8}>10 years</option>
              <option value={option9}>All Data</option>
            </select>
          </label>
        </form>
        <LineChart width={1000} height={500} data={priceData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis hide='true' dataKey='name' padding={{ right: 20 }} />
          <YAxis type='number' domain={['auto', 'auto']} padding={{ top: 0, bottom: 0 }} />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='price' stroke='#82ca9d' strokeWidth={2} dot={false} />
        </LineChart>
      </div>
    )
  }
  handleChange (e) {
    this.setState({priceDataArr: []})
    var optionArr = e.target.value.split(',')
    console.log(this.props.symbol)

    var urlPriceToChange = 'https://www.alphavantage.co/query?function=TIME_SERIES_' + optionArr[0] + '&symbol=' + this.props.symbol + '&apikey=D2E5ZAQU25U0NKAE'

    fetch(urlPriceToChange)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          var obj = (data[optionArr[1]])
          var dataArr = []
          var counter = 0
          for (var prop in obj) {
            if (counter > optionArr[2]) {
              break
            }
            dataArr.push({
              name: prop,
              price: +obj[prop]['4. close']
            })
            counter++
          }
          this.setState({
            priceDataArr: dataArr.reverse()
          })
        })
        .catch((err) => {
          console.log(err)
        })
  }
  componentDidMount () {
    const urlPrice = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&outputsize=full&symbol=AAPL&apikey=D2E5ZAQU25U0NKAE'

    fetch(urlPrice)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        var obj = (data['Time Series (5min)'])
        var dataArr = []
        var counter = 0
        for (var prop in obj) {
          if (counter > 79) {
            break
          }

          dataArr.push({
            name: prop,
            price: +obj[prop]['4. close']
          })
          counter++
        }
        this.setState({
          priceDataArr: dataArr.reverse()
        })
        this.handlePriceDataArrChange(dataArr.reverse())
      })
      .catch((err) => {
        console.log(err)
      })
  }

}

export default PriceGraph
