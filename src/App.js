import UseReducerComponent from './hooks/UseReducer/UseReducerComponent'
import UseEffectComponent from './hooks/useEffect/UseEffectComponent'
import UseStateHook from './hooks/useState/UseStateHook'

/**
 * Hooks allow function components to have access to state and other React features.
 * Because of this, class components are generally no longer needed.
 * Although Hooks generally replace class components, there are no plans to remove classes from React.
 * Hooks allow us to "hook" into React features such as state and lifecycle methods.
 */

/**
 * You must import Hooks from react.
 * hooks keep track of the application state.
 * State generally refers to application data or properties that need to be tracked.
 *
 * There are 3 rules for hooks:
 *   Hooks can only be called inside React function components.
 *   Hooks can only be called at the top level of a component.
 *   Hooks cannot be conditional
 * also Hooks will not work in React class components
 * If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.
 */

function App () {
  return (
    <div className='App'>
      {/* <UseStateHook /> */}
      {/* <UseReducerComponent /> */}
      <UseEffectComponent />
    </div>
  )
}

export default App
