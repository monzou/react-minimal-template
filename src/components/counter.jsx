import React, { Component } from 'react'

export default class Counter extends Component {

  constructor (props) {
    super(props)
    this.state = { count: props.count }
    this.increment = this.increment.bind(this)
  }

  increment () {
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    return (
      <div onClick={ this.increment }>
        Clicks: {this.state.count}
      </div>
    )
  }

}
