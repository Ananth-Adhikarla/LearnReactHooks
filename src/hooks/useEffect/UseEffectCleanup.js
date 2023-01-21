import React, { useState, useEffect } from 'react'

/**
 * Some effects require cleanup to reduce memory leaks.
 * Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
 * We do this by including a return function at the end of the useEffect Hook
 *
 */

const UseEffectCleanup = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ paddingTop: '20px', borderTop: '2px solid black' }}>
      <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default UseEffectCleanup
