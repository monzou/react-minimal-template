import React from 'react'
import Container from './container'
import Descriptor from '../components/descriptor'
import Counter from '../components/counter'

export default class App extends Container {

  constructor (props) {
    super(props)
    this.state = { count: 0 }
  }

  componentDidMount () {
    this.subscribe({
      increment: this.incrementCount
    })
  }

  incrementCount () {
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    return (
      <div>
        <Descriptor descriptor={ this.props.descriptor } />
        <Counter dispatch={ this.dispatch } { ...this.state } />
      </div>
    )
  }

}
