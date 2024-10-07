import React from 'react'
import { Task } from '../App'
import { CheckCircle, Circle } from 'lucide-react'

interface TaskListProps {
  tasks: Task[]
  onToggleTask: (id: number) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`glass-morphism p-4 ${
            task.completed ? 'opacity-50' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              {task.title}
            </h3>
            <button onClick={() => onToggleTask(task.id)} className="focus:outline-none">
              {task.completed ? (
                <CheckCircle className="w-6 h-6 text-green-400" />
              ) : (
                <Circle className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-2">{task.category}</p>
          <div className="flex justify-between items-center">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
            <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList