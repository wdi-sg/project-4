# Graviton

_**Revolutionizing Stock Analysis**_

> **_Graviton_** _is an app that provides realtime stock information and charting of historical data, with a technical predictive algorithm._

## Live Version

Click for an app demo:
[https://graviton-eabd7.firebaseapp.com](https://graviton-eabd7.firebaseapp.com)

## Objectives
- To provide users with a simple interface displaying real time, historical stock trends based on desired time intervals

- Enable users to know the confidence level of the current market based on a regression analysis performed on the stock's Relative Strength Index (RSI) and Average Directional Index (ADX)


## Getting Started

This project is built with [**ReactJS**](https://facebook.github.io/react/) for its front end user interfacing and [**Firebase**](https://firebase.google.com/).

### How to Use

Fork and clone this repository into your own directory. Install the dependencies used in this project by entering the following code in your terminal (with a prerequisite of [**Homebrew**](https://brew.sh/)):

``brew install yarn``

``yarn install``

### Deployment

#### Hosting
This project was deployed with [Firebase](https://firebase.google.com/) follow the documentation for your deployment.

## Built With

* JavaScript
* ReactJS
* Firebase
* [**react-router-firebase-auth**](https://github.com/tylermcginnis/react-router-firebase-auth)

## APIs Used
* Alpha Vantage (https://www.alphavantage.co/#page-top)
* Recharts (http://recharts.org/)

## Application Overview
![](/readme_images/graviton_frontpage.png)
![](/readme_images/livestocks_page.png)

##### Process Flow
![](/readme_images/process_flow.png)

##### Initial Wireframes

![](/readme_images/initial_visualization.png)

![](/readme_images/stocks_wireframe.png)

## React Components
Primarily built on ReactJS, the Live Stocks page of this app is based off the following React components:

![](/readme_images/react_components.png)

The main components were RSI (in blue, also the landing page), stock price (green) and ADX (in red), with RSI being the parent of both stock price and ADX.

## Regression Analysis
Linear regression aims to fit a linear equation of the form **Y = a + bX** to the observed data (think a line of best fit). In which for this project, X will be the historical RSI, also known as the explanatory variable while Y is the predicted RSI, the dependent variable.

**_a_**, the intersect and **_b_**, the slope can then be determined as shown in the formula below, based on historical records of the RSI and stock price.  

![](/readme_images/regression_line.png)

The Relative Strength Index (RSI) is a technical momentum indicator used to indicated overbought or oversold conditions in the market, that compares the magnitude of recent gains and losses over a specified time period (_http://www.investopedia.com/terms/r/rsi.asp_).

![](/readme_images/RSI.png)

From obtaining the predicted RSI (Y value) from the equation, a simple calculation can be done to check if the stock is overbought or oversold. If subtracting the YTD price with the predicted RSI yields < 0, the stock price is expected to rise and if otherwise, is expected to drop in the foreseeable future.

## Recharts

To utilize the Recharts API, we had to import it into each component that has to render a graph as follows.

```
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ReferenceLine } from 'recharts'
```

Followed by the JSX below that is called in the rendered return of the component, that can be easily customized.

```
<LineChart width={700} height={200} data={rsiData}
  margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
  <XAxis hide='true' dataKey='date' padding={{ right: 20 }} />
  <YAxis type='number' domain={[25, 75]} padding={{ top: 0, bottom: 0 }} />
  <CartesianGrid strokeDasharray='3 3' />
  <Tooltip />
  <ReferenceLine y={70} label='Max' stroke='red' />
  <ReferenceLine y={30} label='Min' stroke='red' />

  <Legend />
  <Line type='monotone' dataKey='RSI' stroke='#82ca9d' strokeWidth={2} dot={false} />
</LineChart>
```

## Issues Faced

##### Infinite Geometric Mean
In the calculation of the Geometric Average, the formula used was as such,

_Geometric Average = (RSI1 x RSI2 x RSI3 .... RSI(n))^(1/n)_

However, in code, an error would occur because the multiplication of a large amount of RSI data led to the value to become infinity.

A fix was to manipulate the mathematical formula into

_Geometric Average = (RSI1^(1/n) x RSI2^(1/n) x RSI3^(1/n) .... RSI(n)^(1/n))_

Code used:
``parseFloat(Math.pow(x, (1/xRSI.length))).toFixed(2)``

##### Deployment
On the first deployment to Firebase, an NPM regression package used encountered an error with create-react-app, being that

```npm run build``` fails to minify

More information regarding the error can be found in the link below. Due to constraints of time, the NPM package had to be abandoned and the regression analysis hand coded on our own.

 _https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md_

##### 404 Error When Refreshing a Deployed Page
![](/readme_images/404error.png)

A 404/Not Found html file was in the root directory to handle cases when a user tries to access a page that does not exist or to prevent broken links in other cases. However, it was found on deployment, that whenever the user refreshed the current page, there will always be a redirect to this 404 html file.  

A fix was to include a URL rewrite in the ``firebase.json`` file as follows:

```
"rewrites": [ {
  "source": "**",
  "destination": "/index.html"
} ]
```

## Further Development
* Incorporate more stocks
* Have multiple regression lines inside the graph
* Include more technical indicators


## Authors

* **[Brian Lee](https://github.com/bleetdh)**
* **[Jerald Chua](https://github.com/karl-x)**
* **[Shaun Loh](https://github.com/shaunloh89)**

## Acknowledgments

Tyler McGinnis' [react-router-firebase-auth](https://github.com/tylermcginnis/react-router-firebase-auth)

Our GA instructor Prima Aulia Gusta and teaching assistant Shimei Wong
