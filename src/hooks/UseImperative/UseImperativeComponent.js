import React from 'react'
import UseImperativeHook from './UseImperativeHook'

/**
 * useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.
 * useImperativeHandle(ref, createHandle, dependencies?)
 * Call useImperativeHandle at the top level of your component to customize the ref handle it exposes:
 * By default, components don’t expose their DOM nodes to parent components
 * Do not overuse refs. You should only use refs for imperative behaviors that you can’t express as props:
 * for example, scrolling to a node, focusing a node, triggering an animation, selecting text, and so on.
 *
 * If you can express something as a prop, you should not use a ref.
 * For example, instead of exposing an imperative handle like { open, close } from a Modal component,
 * it is better to take isOpen as a prop like <Modal isOpen={isOpen} />.
 *
 * Effects can help you expose imperative behaviors via props.
 */

const UseImperativeComponent = () => {
  return (
    <div>
      <UseImperativeHook />
    </div>
  )
}

export default UseImperativeComponent
