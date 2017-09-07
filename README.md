# ![](/readme_images/logo.png) Graviton

_**Investment Decision Maker**_

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
This project was deployed with [Firebase](https://firebase.google.com/), create an account and follow the instructions for your deployment.

## Built With

* JavaScript
* ReactJS
* Firebase
* [**react-router-firebase-auth**](https://github.com/tylermcginnis/react-router-firebase-auth)

## APIs Used
* Alpha Vantage (https://www.alphavantage.co/#page-top)
* Recharts (http://recharts.org/)

## Application Overview
![](/readme_images/the_app.png)

##### Process Flow
![](/readme_images/process_flow.png)

##### Initial Wireframes

![](/readme_images/initial_visualization.png)

![](/readme_images/stocks_wireframe.png)

## React
Primarily built on ReactJS, the Live Stocks page of this app is based off several react components as follows:

![](/readme_images/react_components.png)



## Regression Analysis


## Issues Faced

##### Geometric Mean Calculation


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


## Authors

* **[Brian Lee](https://github.com/bleetdh)**
* **[Jerald Chua](https://github.com/karl-x)**
* **[Shaun Loh](https://github.com/shaunloh89)**

## Acknowledgments

Tyler McGinnis' [react-router-firebase-auth](https://github.com/tylermcginnis/react-router-firebase-auth)
