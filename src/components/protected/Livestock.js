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
    return (
      <div>
        <PriceGraph priceDataArr={priceData} />

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
              rsiArr: this.state.rsiArr.concat(+rsi.RSI),
              rsiDataArr: this.state.rsiDataArr.concat({ name: index, RSI: +rsi.RSI })
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
