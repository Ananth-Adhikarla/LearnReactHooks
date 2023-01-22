import React, { useContext } from 'react'
import { AppContext } from './UseContextHook'

const Login = () => {
  const { setUsername } = useContext(AppContext)

  return (
    <div>
      <input
        onChange={event => {
          setUsername(event.target.value)
        }}
      />
    </div>
  )
}

export default Login