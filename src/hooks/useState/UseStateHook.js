import React, { useState } from 'react'
import './UseStateHook.css'

/**
 * useState accepts an initial state and returns two values:
 *   The current state.
 *   A function that updates the state.
 *
 * Examples of use state hook
 * 1) Counter -> Every time the button is clicked. Count increases by 1
 *
 */
const UseStateHook = () => {
  /**
   * Examples
   * const [state, setState] = useState(0) // int
   * const [state, setState] = useState('') // string
   * const [state, setState] = useState(true) // bool
   * const [state, setState] = useState({}) // object
   * const [state, setState] = useState([]) // array
   */

  const [count, setCount] = useState(0)

  const UpdateCount = () => {
    setCount(count + 1)
  }

  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red'
  })

  /**
   * When state is updated, the entire state gets overwritten.
   * What if we only want to update the color of our car?
   * If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
   * Because we need the current value of state, we pass a function into our setCar function.
   * This function receives the previous value.
   * We then return an object, spreading the previousState and overwriting only the color.
   */
  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: 'blue' }
    })
  }

  const [inputText, setInputText] = useState('')

  const UpdateInputText = event => {
    setInputText(event.target.value)
  }

  return (
    <div className='container'>
      <span className='text'>{count}</span>
      <button className='btn mt-40' onClick={UpdateCount}>
        Click to increase count
      </button>

      <div className='border' />

      <span className='text mt-40'>
        My {car.brand} &nbsp; It is a {car.color} {car.model} from {car.year}.
      </span>

      <button className='btn mt-40' type='button' onClick={updateColor}>
        Blue
      </button>

      <div className='border' />

      <input
        className='mt-40'
        type='text'
        onChange={UpdateInputText}
        placeholder='Type something...'
      />

      <span className='text mt-40'>{inputText}</span>
    </div>
  )
}

export default UseStateHook
