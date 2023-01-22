import React from 'react'
import UseRefHook from './UseRefHook'
import UseRefHook1 from './UseRefHook1'
import UseRefHook2 from './UseRefHook2'

/**
 * useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 * The useRef Hook allows you to persist values between renders.
 * It can be used to store a mutable value that does not cause a re-render when updated.
 * It can be used to access a DOM element directly.
 * Does Not Cause Re-renders
 * useRef() only returns one item. It returns an Object called current.
 * When we initialize useRef we set the initial value: useRef(0).
 * It's like doing this: const count = {current: 0}. We can access the count by using count.current.
 * Accessing DOM Elements
 * In general, we want to let React handle all DOM manipulation.
 * But there are some instances where useRef can be used without causing issues.
 * In React, we can add a ref attribute to an element to access it directly in the DOM.
 * Tracking State Changes
 * The useRef Hook can also be used to keep track of previous state values.
 * This is because we are able to persist useRef values between renders.
 *
 * Do not write or read ref.current during rendering
 */

const UseRefComponent = () => {
  return (
    <div>
      <UseRefHook />
      <UseRefHook1 />
      <UseRefHook2 />
    </div>
  )
}

export default UseRefComponent
