import React, { useEffect, useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('http://localhost:3001/api/tasks')
        if (!res.ok) throw new Error('Network response was not ok')
        const json = await res.json()
        setTasks(json)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui, Arial, sans-serif', padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1>intern.dev — Tasks</h1>
      <p>Data is loaded from <code>http://localhost:3001/api/tasks</code>.</p>
      {loading && <p>Loading…</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {tasks && (
        <pre style={{ background: '#f6f8fa', padding: 16, borderRadius: 12, overflowX: 'auto' }}>
{JSON.stringify(tasks, null, 2)}
        </pre>
      )}
      <p style={{ marginTop: 24, opacity: 0.7 }}>You can replace the JSON in <code>/data/intern_dev_tasks_sources_v3.json</code>.</p>
    </div>
  )
}
