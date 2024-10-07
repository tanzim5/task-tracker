import React from 'react'
import { TrendingUp } from 'lucide-react'

interface Track {
  id: number
  name: string
  category: string
  progress: number
}

const sampleTracks: Track[] = [
  { id: 1, name: 'Learn React', category: 'Programming', progress: 75 },
  { id: 2, name: 'Read 20 books', category: 'Personal Development', progress: 30 },
  { id: 3, name: 'Exercise routine', category: 'Health', progress: 60 },
  { id: 4, name: 'Learn Spanish', category: 'Language', progress: 40 },
  { id: 5, name: 'Meditation practice', category: 'Wellness', progress: 90 },
]

const TrackList: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Tracks</h2>
      {sampleTracks.map((track) => (
        <div key={track.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <TrendingUp className="w-6 h-6 text-purple-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">{track.name}</h3>
            </div>
            <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              {track.category}
            </span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
              <div
                style={{ width: `${track.progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
              ></div>
            </div>
          </div>
          <p className="text-right mt-1 text-sm text-gray-600">{track.progress}% complete</p>
        </div>
      ))}
    </div>
  )
}

export default TrackList