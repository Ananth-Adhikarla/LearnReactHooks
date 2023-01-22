React Hooks are a function type that allows you to hook into React state and lifecycle features. 
This was introduced with React 16.8 update and has become a must-needed part of any React application since then.
(Previously class based system)

advantages of using React hooks
  More flexibility in reusing an existing piece of code.
  There is no need to refactor the functional component into a class component when it grows complex.
  You don’t have to worry about this at all.
  No more bindings for methods
  It is simpler to distinguish logic and UI using hooks.

React Hook Types

Basic Hooks
  useState()
  useEffect()
  useContext()

Additional Hooks
  useReducer()
  useMemo()
  useCallback()
  useImperativeHandle()
  useDebugValue()
  useRef()
  useLayoutEffect()

Effect Hook ( useEffect ) - to handle side effects
tldr: It allows us to implement all of the lifecycle hooks from within a single function API.

Typical application cases for useEffect hooks are:
  data fetching and consuming data from a server API,
  handling subscriptions with event listeners
  dealing with manual DOM changes.

two types of side effects reside in the React component:
  1.Effects Without Cleanup
  2.Effects With Cleanup

common examples of effects that do not require clean-up are:
  Manual DOM mutations
  network requests
  logging

These operations do not prevent the screen from being changed by the browser
Basically, You can tell React that your component needs to do something after rendering by using this hook.
After performing the DOM updates, React will remember the feature you passed and later call it

Effects with Cleanup
Some effects need cleanup after a DOM update happens.
So, the clean-up function runs before the component is eliminated from the UI to prevent memory leaks.
UseEffect is not only called when the item is unmounted. 
To clean up from the last run, it will run each time, even before the effect runs.

Context Hook
a mechanism to allow us to share data within it's component tree without passing through props
using provider and consumer

useRef 
This hook allows us to create a mutable object. It is used, when the value keeps changes like in the case of useState hook, but the difference is, it doesn't trigger a re-render when the value changes.

The common use case of this, is to grab HTML elements from the DOM.

useReducer 
It does very similiar to setState, It's a different way to manage state using Redux Pattern. 
Instead of updating the state directly, we dispatch actions, that go to a reducer function, and this function figure out, 
how to compute the next state.


useMemo 
optimise computational cost or improve performance. It mostly used when we're needed to make expensive calculations.
Works great for memoizing returned values, 

useCallback 
want to memoize the whole function, in that case we can use this hook

useImperativeHandle 
This hook is use to modify the exposed ref and it is rarely used.

useLayoutEffect 
It works same as useEffect hook with one difference, the callback will run after rendering the component but before the actual updates have been painted to the screen.
Blocks visual updates until your callback is finished.

/*
  USE CASES
*/

use cases of the useState
  State management
  Conditional rendering
  Toggle flags (true/false)
  Counter
  Get API data and store it in state

use cases of the useReducer
  Manage multiple states: modify an array
  Modify complex states, such as arrays or objects: login form

useEffect use cases
  Running once on mount: fetch API data
  Running on state change: validating input field
  Running on state change: live filtering
  Running on state change: trigger animation on new array value
  Running on props change: update paragraph list on fetched API data update
  Running on props change: updating fetched API data to get BTC updated price

  