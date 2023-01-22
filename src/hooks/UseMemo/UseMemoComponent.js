import React from 'react'
import UseMemoHook from './UseMemoHook'

/**
 * useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
 * const cachedValue = useMemo(calculateValue, dependencies)
 * The React useMemo Hook returns a memoized value.
 * Think of memoization as caching a value so that it does not need to be recalculated.
 * The useMemo Hook only runs when one of its dependencies update.
 * This can improve performance.
 * The useMemo and useCallback Hooks are similar.
 * The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
 *
 * The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
 *
 * You should only rely on useMemo as a performance optimization.
 * If your code doesn’t work without it, find the underlying problem and fix it first.
 * Then you may add useMemo to improve performance.
 */

/**
 * In computing, memoization or memoisation is an optimization technique used
 * primarily to speed up computer programs by storing the results of expensive function calls
 * and returning the cached result when the same inputs occur again
 */

const UseMemoComponent = () => {
  return (
    <div>
      <UseMemoHook />
    </div>
  )
}

export default UseMemoComponent
