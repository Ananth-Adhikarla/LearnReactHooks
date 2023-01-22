import React, { useRef } from 'react'
import Button from './Button'

const UseImperativeHook = () => {
  const buttonRef = useRef(null)

  return (
    <>
      <button
        onClick={() => {
          buttonRef.current.alterToggle()
        }}
      >
        Parent Button
      </button>
      <Button ref={buttonRef} />
    </>
  )
}

export default UseImperativeHook
