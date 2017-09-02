import React, {Component} from 'react'
import Graph from './Graph'

class Livestock extends Component {
  constructor (props) {
    super()

    this.state = {
      rsiArr: [],
      timeArr: []
    }
  }
  render () {
    let allData = this.state.rsiArr.map((rsi, index) => {
      // let graphObj = {
      //   x: this.state.timeArr[index],
      //   y: rsi
      // }

      return (
        <Graph
          key={index}
          // graphObj={graphObj}
          rsi={rsi}
          time={this.state.timeArr[index]}
        />
      )
    })
    // let allTime = this .state.timeArr.map((time, index) => {
    //   return <Graph key={index} time={time} />
    // })
    return (
      <div>
        <h2>RSI</h2>
        <ol>
          {allData}
        </ol>
        {/* <ul>{allRSI}</ul> */}
      </div>
    )
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
