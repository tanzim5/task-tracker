import React from 'react'
import { CheckCircle, Circle } from 'lucide-react'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const sampleTodos: Todo[] = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Call mom', completed: true },
  { id: 3, title: 'Finish project proposal', completed: false },
  { id: 4, title: 'Schedule dentist appointment', completed: false },
  { id: 5, title: 'Pay utility bills', completed: true },
]

const TodoList: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">To-Do List</h2>
      {sampleTodos.map((todo) => (
        <div key={todo.id} className="flex items-center p-4 bg-white rounded-lg shadow">
          {todo.completed ? (
            <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
          ) : (
            <Circle className="w-6 h-6 text-gray-300 mr-4" />
          )}
          <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TodoList