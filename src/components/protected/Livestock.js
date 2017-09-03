import React, {Component} from 'react'
import Graph from './Graph'
import Price from './Price'

class Livestock extends Component {
  constructor (props) {
    super()

    this.state = {
      rsiArr: [],
      timeArr: [],
      priceArr: [],
      timePeriod: '',
      timeSeries: '',
      arrSize: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  render () {
    let allPrice = this.state.priceArr.map((price, index) => {
      return <Price key={index} price={price} />
    })
    let allData = this.state.rsiArr.map((rsi, index) => {
      // let graphObj = {
      //   x: this.state.timeArr[index],
      //   y: rsi
      // }

      return (
        <Graph
          key={index}
          // graphObj={graphObj}
          rsiArr={rsi}
          timeArr={this.state.timeArr[index]}
          // rsi={rsi}
          // time={this.state.timeArr[index]}
        />
      )
    })
    // let allTime = this .state.timeArr.map((time, index) => {
    //   return <Graph key={index} time={time} />
    // })
    const option1 = {
      timePeriod: 'INTRADAY&interval=5min&outputsize=full',
      timeSeries: 'Time Series (5min)',
      arrSize: 288
    }
    const option2 = {
      timePeriod: 'INTRADAY&interval=15min&outputsize=full',
      timeSeries: 'Time Series (15min)',
      arrSize: 480
    }
    return (
      <div>
        <h2>Price of Stock: </h2>
        <form onChange={this.handleChange}>
          <label>
            Please select time period:
            <select>
              <option value={option1}>24 hrs</option>
              <option value={option2}>5 days</option>
              <option value='INTRADAY&interval=60min&outputsize=full'>1 month</option>
              <option value='DAILY&outputsize=full'>3 months</option>
              <option value='DAILY&outputsize=full'>6 months</option>
              <option value='DAILY&outputsize=full'>1 year</option>
              <option value='WEEKLY'>5 years</option>
              <option value='WEEKLY'>10 years</option>
              <option value='MONTHLY'>All Data</option>
            </select>
          </label>
        </form>
        <h2>Prices</h2>
        <ol>
          {allPrice}
        </ol>
        <h2>RSI</h2>
        <ol>
          {allData}
        </ol>
        {/* <ul>{allRSI}</ul> */}
      </div>
    )
  }

  handleChange (e) {
    let random = e.target.value
    console.log(random)
    let base = this

    var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_' + e.target.value.timePeriod + '&symbol=AAPL&apikey=D2E5ZAQU25U0NKAE'

    fetch(url)
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
            if (index < 5) {
              base.setState({
                priceArr:
                this.state.priceArr.concat(price['4. close'])
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
        }
        allRsiArr.map((rsi, index) => {
          if (index < 10) {
            this.setState({
              rsiArr: this.state.rsiArr.concat(rsi.RSI)
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
