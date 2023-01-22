import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutHook = () => {
  const inputRef = useRef(null)

  useLayoutEffect(() => {
    console.log('Use Layout Effect')
    // inputRef.current.value = 'Layout Effect'
  }, [])

  useEffect(() => {
    console.log('Use Effect')
    inputRef.current.value = 'Use Effect'
  }, [])

  return (
    <div>
      <input ref={inputRef} defaultValue='Ananth' />
    </div>
  )
}

export default UseLayoutHook
