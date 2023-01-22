import React from 'react'
import UseCallbackHook from './UseCallbackHook'

/**
 * useCallback is a React Hook that lets you cache a function definition between re-renders.
 * const cachedFn = useCallback(fn, dependencies)
 *
 * On the initial render, useCallback returns the fn function you have passed.
 * During subsequent renders, it will either return an already stored fn function from the last render
 * (if the dependencies haven’t changed), or return the fn function you have passed during this render.
 *
 * You need to pass two things to useCallback:
 * A function definition that you want to cache between re-renders.
 * A list of dependencies including every value within your component that’s used inside your function.
 *
 * In other words, useCallback caches a function between re-renders until its dependencies change.
 *
 *
 */

const UseCallbackComponent = () => {
  return (
    <div>
      <UseCallbackHook />
    </div>
  )
}

export default UseCallbackComponent
