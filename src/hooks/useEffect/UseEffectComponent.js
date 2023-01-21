import React from 'react'
import UseEffectHook from './UseEffectHook'
import UseEffectHook1 from './UseEffectHook1'
import UseEffectCleanup from './UseEffectCleanup'
import UseEffectHook3 from './UseEffectHook3'

/**
 * The useEffect Hook allows you to perform side effects in your components.
 * Some examples of side effects are: fetching data, directly updating the DOM, and timers.
 * useEffect(<function>, <dependency>)
 * We should always include the second parameter which accepts an array ( optional but recommended)
 * otherwise it keeps looping even though it should only do it once
 * If there are multiple dependencies, they should be included in the useEffect dependency array.
 * If you’re not trying to synchronize with some external system
 */

/**
 * When Strict Mode is on, React will run one extra development-only setup+cleanup cycle before the first real setup.
 * This is a stress-test that ensures that your cleanup logic “mirrors” your setup logic and that it stops or undoes
 * whatever the setup is doing.
 *
 * If some of your dependencies are objects or functions defined inside the component,
 * there is a risk that they will cause the Effect to re-run more often than needed
 *
 * If your Effect wasn’t caused by an interaction (like a click),
 * React will let the browser paint the updated screen first before running your Effect.
 * If your Effect is doing something visual (for example, positioning a tooltip), and
 * the delay is noticeable (for example, it flickers), you need to replace useEffect with useLayoutEffect.
 *
 * Even if your Effect was caused by an interaction (like a click),
 * the browser may repaint the screen before processing the state updates inside your Effect.
 * Usually, that’s what you want. However, if you must block the browser from repainting the screen,
 * you need to replace useEffect with useLayoutEffect.
 *
 * Effects only run on the client. They don’t run during server rendering.
 *
 */

// 1. No dependency passed:
// useEffect(() => {
//   Runs on every render
// });

// 2. An empty array:
// useEffect(() => {
//   Runs only on the first render
// }, []);

// 3. Props or state values:
// useEffect(() => {
//   Runs on the first render
//   And any time any dependency value changes
// }, [prop, state]);

const UseEffectComponent = () => {
  return (
    <div>
      <UseEffectHook />
      <UseEffectHook1 />
      <UseEffectCleanup />
      {/* <UseEffectHook3 /> */}
    </div>
  )
}

export default UseEffectComponent
