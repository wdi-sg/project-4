import React, {Component} from 'react'
import PriceGraph from './PriceGraph'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
import Counter from './Counter.js'
import RSI from './RSI.js'
import ADX from './ADX.js'

class Livestock extends Component {
  constructor (props) {
    super()
    this.state = {
      rsiArr: [],
      rsiDataArr: [],
      timeArr: [],
      priceDataArr: [],
      rsi: '',
      symbol: 'AAPL',
      priceOptionChange: [
        'INTRADAY&interval=5min&outputsize=full',
        'Time Series (5min)',
        79
      ]
    }
    this.handleRsiChange = this.handleRsiChange.bind(this)
    this.handleSymbolChange = this.handleSymbolChange.bind(this)
  }
  render () {
    let symbol = this.state.symbol
    let rsiData = this.state.rsiDataArr

    const option1 = '&interval=1min'
    const option2 = '&interval=5min'
    const option3 = '&interval=15min'
    const option4 = '&interval=30min'
    const option5 = '&interval=60min'
    const option6 = '&interval=daily'
    const option7 = '&interval=weekly'
    const option8 = '&interval=monthly'

    return (
      <div>
        <h1>Choose the stocks you want to look at</h1>
        <form>
          <label>
            Stock:
            <select onChange={this.handleSymbolChange}>
              <option value='AAPL'>Apple</option>
              <option value='PG'>P&G</option>
            </select>
          </label>
        </form>

        <PriceGraph handlePriceDataArrChange={(arr) => this.handlePriceDataArrChange(arr)} handlePriceOptionChange={(optionArr) => this.handlePriceOptionChange(optionArr)} priceDataArr={this.state.priceDataArr} symbol={symbol} />

        <h2>RSI (Relative Strength Index)</h2>
        <form>
          <label>
            Please select time period:
            <select onChange={this.handleRsiChange}>
              <option value={option1}>1 min</option>
              <option value={option2}>5 min</option>
              <option value={option3}>15 min</option>
              <option value={option4}>30 min</option>
              <option value={option5}>60 min</option>
              <option value={option6}>Daily</option>
              <option value={option7}>Weekly</option>
              <option value={option8}>Monthly</option>
            </select>
          </label>
        </form>

        <LineChart width={1000} height={300} data={rsiData}
          margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
          <XAxis hide='true' dataKey='date' padding={{ right: 20 }} />
          <YAxis type='number' domain={['dataMin - 2', 'dataMax + 2']} padding={{ top: 0, bottom: 0 }} />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='RSI' stroke='#82ca9d' strokeWidth={2} dot={false} />
        </LineChart>

        <h2>Regression</h2>
        <RSI getRSI={(rsi) => this.getRSI(rsi)} />
        <ADX getADX={(adx) => this.getADX(adx)} />
        <Counter rsi={this.state.rsi} adx={this.state.adx} />

      </div>
    )
  }
  getRSI (rsi) {
    this.setState({
      rsi
    })
  }
  getADX (adx) {
    this.setState({
      adx
    })
  }

  clickMe () {
    console.log(this)
  }

  handlePriceDataArrChange (arr) {
    this.setState({
      priceDataArr: arr
    })
  }

  handlePriceOptionChange (optionArr) {
    this.setState({
      priceOptionChange: optionArr
    })
  }

  handleSymbolChange (e) {
    this.setState({symbol: e.target.value})
  }

  handleRsiChange (e) {
    this.setState({rsiDataArr: []})
    var optionArr = e.target.value.split(',')

    var urlRsiToChange = 'https://www.alphavantage.co/query?function=RSI&symbol=' + this.state.symbol + optionArr[0] + '&time_period=60&series_type=open&apikey=D2E5ZAQU25U0NKAE'

    fetch(urlRsiToChange)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log('fetch data', data)
          var rsiObj = (data['Technical Analysis: RSI'])
          var timeRsiArr = []

          for (var prop in rsiObj) {
            timeRsiArr.push({date: prop, RSI: +rsiObj[prop].RSI })
          }
          timeRsiArr.map((timeRsiData, index) => {
            if (index < 10) {
              this.setState({
                rsiDataArr: this.state.rsiDataArr.concat(timeRsiData)
              })
            }
          })
          this.setState({ rsiDataArr: this.state.rsiDataArr.reverse() })
        })
        .catch((err) => {
          console.log(err)
        })
  }

  componentDidMount () {
    const url = 'https://www.alphavantage.co/query?function=RSI&symbol=AAPL&interval=daily&time_period=60&series_type=close&apikey=D2E5ZAQU25U0NKAE'

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        var rsiObj = (data['Technical Analysis: RSI'])
        var allRsiArr = []
        var allTimeArr = []
        var timeRsiArr = []

        // for the graph
        for (var prop in rsiObj) {
          timeRsiArr.push({date: prop, RSI: +rsiObj[prop].RSI })
        }
        timeRsiArr.map((timeRsiData, index) => {
          if (index < 10) {
            this.setState({
              rsiDataArr: this.state.rsiDataArr.concat(timeRsiData)
            })
          }
        })
        this.setState({ rsiDataArr: this.state.rsiDataArr.reverse() })
        // for the values
        for (var prop in rsiObj) {
          allRsiArr.push(rsiObj[prop])
          allTimeArr.push(prop)
        }
        allRsiArr.map((rsi, index) => {
          if (index < 10) {
            this.setState({
              rsiArr: this.state.rsiArr.concat(+rsi.RSI)
            })
          }
        })
        allTimeArr.map((time, index) => {
          if (index < 10) {
            this.setState({
              timeArr: this.state.timeArr.concat(time)
            })
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

}

export default Livestock
