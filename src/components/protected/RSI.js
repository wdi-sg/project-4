import React, {Component} from 'react'
import Enemy from './Enemy'
import ReactDOM from 'react-dom';

class RSI extends Component {
  constructor (props) {
    super(props)

    this.state ={
      rsiArr: []
    }

    this.getRSI = props.getRSI
  }

  render() {
    let allRSI = this.state.rsiArr.map((number, index) => {
      return <Enemy key={index} name={number} />
    })

    return (
      <div>
      {/* <ul>RSI: {allRSI}</ul> */}

      </div>
    )
  }
componentDidMount () {
  const url2 = 'https://www.alphavantage.co/query?function=RSI&symbol=AAPL&interval=daily&time_period=14&series_type=close&apikey=D2E5ZAQU25U0NKAE'

  fetch(url2)
    .then((response) => { // promise is resolved, and response is received
      // console.log('response', response)
      return response.json() // convert response.body into json format
    })

    .then ((data) => {
      var obj =(data["Technical Analysis: RSI"])
      var randomArr=[]
      for (var prop in obj) {
        randomArr.push(obj[prop])
      }
      randomArr.map((indicator, index) => {
        if (index < 200) {
          this.setState({
            rsiArr: this.state.rsiArr.concat(indicator.RSI)
          })
        }
      })
      this.getRSI(this.state.rsiArr)

      console.log(this.state.rsiArr)
    })

    // .then((data) => {
    //   // console.log('data', data) // reads the json
    //   var obj = data["Technical Analysis: RSI"]
    //   // console.log(obj)
    //   // var numbers = []
    //     for (var prop in obj) {
    //       // console.log(obj[prop]["RSI"]) //pulls rsi
    //       this.state.enemiesArr.push(obj[prop]["RSI"])
    //       this.setState({
    //         enemiesArr: this.state.enemiesArr
    //       }) //pulls rsi
    //
    //     }
    //   console.log((this.state.enemiesArr))
    // })

    .catch((err) => {
      console.log('err', err) // just in case if api call fails
    })
}




}



export default RSI
