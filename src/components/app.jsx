import React, { Component } from 'react'
import Descriptor from './descriptor'
import Counter from './counter'

export default class App extends Component {

  render () {
    return (
      <div>
        <Descriptor descriptor={ this.props.descriptor } />
        <Counter count={ 0 } />
      </div>
    )
  }

}
