import React, { useReducer } from 'react'

/**
 * The useReducer Hook is similar to the useState Hook.
 * It allows for custom state logic.
 * If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
 * The useReducer Hook accepts two arguments.
 * useReducer(<reducer>, <initialState>)
 * The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.
 * The useReducer Hook returns the current stateand a dispatchmethod.
 *
 */

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText }
    case 'toggleShowText':
      return { count: state.count, showText: !state.showText }
    default:
      return state
  }
}

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' })
          dispatch({ type: 'toggleShowText' })
        }}
      >
        Click Here{' '}
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  )
}

export default UseReducerHook
