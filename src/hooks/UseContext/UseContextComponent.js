import React from 'react'
import UseContextHook from './UseContextHook'

/**
 * useContext is a React Hook that lets you read and subscribe to context from your component.
 * React Context is a way to manage state globally.
 * It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
 * State should be held by the highest parent component in the stack that requires access to the state.
 *
 * To create context, you must Import createContext and initialize it:
 * import { useState, createContext } from "react";
 * const UserContext = createContext()
 * use the Context Provider to wrap the tree of components that need the state Context.
 *   <UserContext.Provider value={user}>
 *     <h1>{`Hello ${user}!`}</h1>
 *     <Component2 user={user} />
 *   </UserContext.Provider>
 * Now, all components in this tree will have access to the user Context.
 */

/**
 * In order to use the Context in a child component, we need to access it using the useContext Hook.
 * First, include the useContext in the import statement:
 * import { useState, createContext, useContext } from "react";
 * const user = useContext(UserContext);
 *
 * If React can’t find any providers of that particular context in the parent tree,
 * the context value returned by useContext() will be equal to the default value that you
 * specified when you created that context
 */

const UseContextComponent = () => {
  return (
    <div>
      <UseContextHook />
    </div>
  )
}

export default UseContextComponent
