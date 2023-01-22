import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false)

  useImperativeHandle(ref, () => ({
    alterToggle () {
      setToggle(!toggle)
    }
  }))

  return (
    <>
      <button>Child Button</button>
      {toggle && <span> Hello World!... </span>}
    </>
  )
})

export default Button
