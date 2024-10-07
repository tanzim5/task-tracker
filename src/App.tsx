import React, { useState } from 'react'
import { Lightbulb } from 'lucide-react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Header from './components/Header'
import TodoList from './components/TodoList'
import NoteList from './components/NoteList'
import TrackList from './components/TrackList'
import Tabs from './components/Tabs'
import Footer from './components/Footer'

export interface Task {
  id: number
  title: string
  category: string
  priority: 'Low' | 'Medium' | 'High'
  completed: boolean
}

const sampleTasks: Task[] = [
  { id: 1, title: 'Complete project proposal', category: 'Work', priority: 'High', completed: false },
  { id: 2, title: 'Go for a run', category: 'Health', priority: 'Medium', completed: true },
  { id: 3, title: 'Read a chapter of a book', category: 'Personal', priority: 'Low', completed: false },
  { id: 4, title: 'Prepare presentation', category: 'Work', priority: 'High', completed: false },
  { id: 5, title: 'Buy groceries', category: 'Errands', priority: 'Medium', completed: false },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks)
  const [activeTab, setActiveTab] = useState('tasks')

  const addTask = (task: Omit<Task, 'id' | 'completed'>) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }])
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tasks':
        return (
          <>
            <TaskForm onAddTask={addTask} />
            <TaskList tasks={tasks} onToggleTask={toggleTask} />
          </>
        )
      case 'to-dos':
        return <TodoList />
      case 'notes':
        return <NoteList />
      case 'tracks':
        return <TrackList />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="mt-8">{renderTabContent()}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App