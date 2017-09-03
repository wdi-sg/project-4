import React, {Component} from 'react'
import Graph from './Graph'
import ReactDom from 'react-dom'

class Livestock extends Component {
  constructor (props) {
    super()

    this.state = {
      rsiArr: []
    }
  }
  render () {
    let allRSI = this.state.rsiArr.map((rsi, index) => {
      return <Graph key={index} rsi={rsi} />
    })
    return (
      <div>
        <h2>latest RSI to past 100 RSI</h2>
        <ol>
          {allRSI}
        </ol>
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
        for (var prop in rsiObj) {
          allRsiArr.push(rsiObj[prop])
        }
        allRsiArr.map((rsi, index) => {
          if (index < 5) {
            this.setState({
              rsiArr: this.state.rsiArr.concat(rsi.RSI)
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
