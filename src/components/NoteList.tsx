import React from 'react'
import { FileText } from 'lucide-react'

interface Note {
  id: number
  title: string
  content: string
}

const sampleNotes: Note[] = [
  { id: 1, title: 'Meeting Notes', content: 'Discuss Q3 goals and project timeline' },
  { id: 2, title: 'Ideas for Blog Post', content: '1. Top 10 productivity tips\n2. How to stay motivated' },
  { id: 3, title: 'Shopping List', content: 'Milk, eggs, bread, fruits, vegetables' },
  { id: 4, title: 'Book Recommendations', content: '1. Atomic Habits\n2. Deep Work\n3. The Lean Startup' },
]

const NoteList: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleNotes.map((note) => (
          <div key={note.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-purple-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">{note.title}</h3>
            </div>
            <p className="text-gray-600 whitespace-pre-line">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NoteList