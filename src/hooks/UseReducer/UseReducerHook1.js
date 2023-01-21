import React, { useReducer } from 'react'

const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false
  }
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete }
        } else return todo
      })
    case 'NEW':
      return [...state, action.newTodo]
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

const UseReducerHook1 = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleComplete = todo => {
    dispatch({ type: 'COMPLETE', id: todo.id })
  }

  const handleNew = () => {
    const newID = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1
    const newTodo = {
      id: newID,
      title: `Todo ${newID}`,
      complete: false
    }
    dispatch({ type: 'NEW', newTodo })
  }

  const handleDelete = todo => {
    dispatch({ type: 'DELETE', id: todo.id })
  }

  return (
    <div
      style={{
        margin: '20px 0',
        padding: '20px 0',
        borderTop: '2px solid black'
      }}
    >
      {todos.map(todo => (
        <div key={todo.id}>
          <label>
            <input
              type='checkbox'
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
            <button
              type='button'
              onClick={() => handleDelete(todo)}
              style={{ marginLeft: '20px' }}
            >
              Delete {todo.id}
            </button>
          </label>
        </div>
      ))}
      <button type='button' onClick={handleNew} style={{ marginTop: '20px' }}>
        Add New To Do
      </button>
    </div>
  )
}

export default UseReducerHook1
