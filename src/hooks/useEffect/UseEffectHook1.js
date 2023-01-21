import React, { useState, useEffect } from 'react'

const UseEffectHook1 = () => {
  const [count, setCount] = useState(0)
  const [calculation, setCalculation] = useState(0)

  useEffect(() => {
    setCalculation(() => count * 2)
  }, [count]) // <- add the count variable here

  return (
    <>
      <p style={{ paddingTop: '20px', borderTop: '2px solid black' }}>
        Count (UseEffectHook1): {count}
      </p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  )
}

export default UseEffectHook1
