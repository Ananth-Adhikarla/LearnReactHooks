import React, { useRef } from 'react'

const UseRefHook = () => {
  const inputRef = useRef(null)

  const onClick = () => {
    console.log(inputRef.current.value)
    inputRef.current.focus()
    // inputRef.current.value = ''
  }

  return (
    <div>
      <h1>Ananth</h1>
      <input type='text' placeholder='Ex...' ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default UseRefHook
