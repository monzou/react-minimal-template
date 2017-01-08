import React from 'react'

const Counter = ({ dispatch, count }) => (
  <div onClick={ () => dispatch('increment', 1) }>
    Clicks: { count }
  </div>
)

export default Counter
