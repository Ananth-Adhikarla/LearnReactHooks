import React, { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * useEffect is a function that runs only when the page re-renders / detect when page re-renders
 *
 */
const UseEffectHook = () => {
  const [data, setData] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setData(response.data[0].email)
        console.log('HELLO')
      })
  }, [count])

  return (
    <div>
      <h1>Email is : {data}</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default UseEffectHook
