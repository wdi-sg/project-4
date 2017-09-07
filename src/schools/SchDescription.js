import React, { Component } from 'react'

export default class SchDescription extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.info.name}</h2>
        <p>{this.props.info.description}</p>
        <p>{this.props.info.location}</p>
        <p>Nearest train station: {this.props.info.trainStation}</p>
        <p>Skillsfuture applicable: {this.props.info.skillsfuture}</p>
        <p>Languages offered: {this.props.info.languages}</p>
        <p>Study Materials: <a href={this.props.info.materials}>Textbook</a></p>
        <p>Link to homepage: <a href={this.props.info.link}>Homepage</a></p>
      </div>
    )
  }
}
