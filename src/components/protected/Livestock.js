import React, {Component} from 'react'
import RSIGraph from './RSIGraph'
import PriceGraph from './PriceGraph'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
// jerald part
import Counter from './Counter.js'
import RSI from './RSI.js'
import Generate from './Generate.js'

// jerald end

class Livestock extends Component {
  constructor (props) {
    super()
    this.state = {
      rsiArr: [],
      rsiDataArr: [],
      timeArr: [],
      priceDataArr: [],
      rsi: ''
    }
  }
  render () {
    let priceData = this.state.priceDataArr
    let rsiData = this.state.rsiDataArr
    let allRSI = this.state.rsiArr.map((rsi, index) => {
      // let graphObj = {
      //   x: this.state.timeArr[index],
      //   y: rsi
      // }
      return (
        <div>
          <RSIGraph
            key={index}
            rsi={rsi}
            // graphObj={graphObj}
            time={this.state.timeArr[index]}
          />
        </div>
      )
    })
    // let allTime = this .state.timeArr.map((time, index) => {
    //   return <Graph key={index} time={time} />
    // })
    // const optionExample = [
    //   'urlchange',
    //   'for data manipulation',
    //   arraysize
    // ]

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
        <PriceGraph priceDataArr={priceData} />

        <h2>RSI</h2>
        <form>
          <label>
            Please select time period:
            <select onChange={this.handleRsiChange}>
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
        <Counter rsi={this.state.rsi} />

      </div>
    )
  }
  getRSI (rsi) {
    console.log(rsi)
    this.setState({
      rsi
    })
  }

  handleRsiChange (e) {
    this.setState({rsiDataArr: []})
    var optionArr = e.target.value.split(',')
    console.log('RSI optionArr', optionArr)
    console.log(optionArr[0])
    console.log(optionArr[1])
    console.log(optionArr[2])

    var urlPriceToChange = 'https://www.alphavantage.co/query?function=RSI' + optionArr[0] + '&symbol=AAPL&apikey=D2E5ZAQU25U0NKAE'

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
            rsiDataArr: dataArr.reverse()
          })
        })
        .catch((err) => {
          console.log(err)
        })
  }

  componentDidMount () {
    const url = 'https://www.alphavantage.co/query?function=RSI&symbol=AAPL&interval=daily&time_period=10&series_type=close&apikey=D2E5ZAQU25U0NKAE'

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
          // console.log(typeof +rsiObj[prop].RSI)
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
