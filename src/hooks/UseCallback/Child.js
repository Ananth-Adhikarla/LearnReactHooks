import React, { useEffect } from 'react'

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log('FUNCTION WAS CALLED')
  }, [returnComment])

  return <div>{returnComment('Ananth was here')}</div>
}

export default Child
