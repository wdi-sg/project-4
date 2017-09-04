import React, {Component} from 'react'
import RSIGraph from './RSIGraph'
import Price from './Price'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'

class Livestock extends Component {
  constructor (props) {
    super()
    this.state = {
      rsiArr: [],
      timeArr: [],
      priceArr: [],
      priceDataArr: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  render () {
    let data = this.state.priceDataArr
    let rsiData = this.state.rsiArr

    let allPrice = this.state.priceArr.map((price, index) => {
      return <Price key={index} price={price} />
    })

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
    const option1 = [
      'INTRADAY&interval=5min&outputsize=full',
      'Time Series (5min)',
      288
    ]
    const option2 = [
      'INTRADAY&interval=15min&outputsize=full',
      'Time Series (15min)',
      480
    ]
    const option3 = [
      'INTRADAY&interval=60min&outputsize=full',
      'Time Series (60min)',
      720
    ]
    const option4 = [
      'DAILY&outputsize=full',
      'Time Series (Daily)',
      90
    ]
    const option5 = [
      'DAILY&outputsize=full',
      'Time Series (Daily)',
      180
    ]
    const option6 = [
      'DAILY&outputsize=full',
      'Time Series (Daily)',
      365
    ]
    const option7 = [
      'WEEKLY',
      'Weekly Time Series',
      260
    ]
    const option8 = [
      'WEEKLY',
      'Weekly Time Series',
      520
    ]
    const option9 = [
      'MONTHLY',
      'Monthly Time Series',
      999
    ]
    return (
      <div>
        <h2>Price of Stock: </h2>
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

        <h2>Prices</h2>
        <LineChart width={1000} height={500} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey='name' padding={{ right: 20 }} />
          <YAxis type='number' domain={['dataMin - 2', 'dataMax + 2']} padding={{ top: 20, bottom: 20 }} />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='price' stroke='#82ca9d' dot={false} />
        </LineChart>

        <ol>
          { allPrice }
        </ol>

        <h2>RSI</h2>
        <LineChart width={1000} height={500} data={rsiData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey='name' padding={{ right: 20 }} />
          <YAxis type='number' domain={['dataMin - 2', 'dataMax + 2']} padding={{ top: 20, bottom: 20 }} />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='RSI' stroke='#82ca9d' dot={false} />
        </LineChart>

        <ol>
          { allRSI }
        </ol>
        {/* <ul>{allRSI}</ul> */}
      </div>
    )
  }

  handleChange (e) {
    this.setState({priceArr: [], priceDataArr: []})
    var optionArr = e.target.value.split(',')
    console.log(optionArr[0])
    console.log(optionArr[1])
    console.log(optionArr[2])
    let base = this

    var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_' + optionArr[0] + '&symbol=AAPL&apikey=D2E5ZAQU25U0NKAE'

    fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          var obj = (data[optionArr[1]])
          var randomArr = []
          for (var prop in obj) {
            randomArr.push(obj[prop])
          }
          randomArr.map((price, index) => {
            if (index < optionArr[2]) {
              base.setState({
                priceArr:
                this.state.priceArr.concat(price['4. close']),
                priceDataArr: this.state.priceDataArr.concat({ name: index, price: +price['4. close'] })
              })
            }
          })
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
        for (var prop in rsiObj) {
          allRsiArr.push(rsiObj[prop])
          allTimeArr.push(prop)
          // console.log(typeof +rsiObj[prop].RSI)
        }
        allRsiArr.map((rsi, index) => {
          if (index < 10) {
            this.setState({
              rsiArr: this.state.rsiArr.concat({ name: index, price: +rsi.RSI })
            })
          }
        })
        // allTimeArr.map((time, index) => {
        //   if (index < 10) {
        //     this.setState({
        //       timeArr: this.state.timeArr.concat(time)
        //     })
        //   }
        // })
      })
      .catch((err) => {
        console.log(err)
      })

    const url1 = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&outputsize=full&symbol=AAPL&apikey=D2E5ZAQU25U0NKAE'

    fetch(url1)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          var obj = (data['Time Series (5min)'])
          var randomArr = []
          for (var prop in obj) {
            randomArr.push(obj[prop])
          }
          randomArr.map((price, index) => {
            if (index < 288) {
              this.setState({
                priceArr:
                this.state.priceArr.concat(price['4. close']),
                priceDataArr: this.state.priceDataArr.concat({ name: index, price: +price['4. close'] })
              })
            }
          })
        })
  }

}

export default Livestock
