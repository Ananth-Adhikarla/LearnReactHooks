import React from 'react'
import UseLayoutHook from './UseLayoutHook'

/**
 * useLayoutEffect can hurt performance. Prefer useEffect when possible.
 * useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
 * useLayoutEffect(setup, dependencies?)
 * React guarantees that the code inside useLayoutEffect and
 * any state updates scheduled inside it will be processed before the browser repaints the screen
 *
 * The purpose of useLayoutEffect is to let your component use layout information for rendering:
 * 1. Render the initial content.
 * 2. Measure the layout before the browser repaints the screen.
 * 3. Render the final content using the layout information you’ve read.
 */

export const UseLayoutComponent = () => {
  return (
    <div>
      <UseLayoutHook />
    </div>
  )
}
