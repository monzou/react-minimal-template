import React from 'react'

const Descriptor = ({ descriptor }) => (
  <div>
    <h1>Counter application</h1>
    <dl>
      <dt>version</dt>
      <dd>{ descriptor.version }</dd>
      <dt>timestamp</dt>
      <dd>{ descriptor.timestamp }</dd>
    </dl>
  </div>
)

export default Descriptor
