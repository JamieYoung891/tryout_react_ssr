import React, { useState, useEffect } from 'react'

const App = props => {
  const [text, setText] = useState(props.data.text)
  useEffect(() => {
    setText('Client Loaded')
  }, [text])

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default App