import React, { useRef, useState } from 'react'
import MyInput from './MyInput'

/**
 * to pass a ref to your own component use forwardRef and wrap entire component in this
 */

const UseRefHook2 = () => {
  const [val, setVal] = useState('')
  const inputRef = useRef(null)

  const onChange = () => {
    console.log(inputRef.current.value)
    setVal(`Custom Ref : ${inputRef.current.value}`)
  }

  return (
    <div>
      <MyInput ref={inputRef} onChange={onChange} />
      <p>{val}</p>
    </div>
  )
}

export default UseRefHook2
