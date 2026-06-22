import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [dashboardSummary, setDashboardSummary] = useState({
    totalEvents: 0,
    totalUsers: 0,
  })

  useEffect(() => {
    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          dashboardSummary {
            totalEvents
            totalUsers
          }
        }`,
      }),
    }).then(res => res.json()).then(data => setDashboardSummary(data.data.dashboardSummary))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p>Total Events: {dashboardSummary.totalEvents}</p>
      <p>Total Users: {dashboardSummary.totalUsers}</p>
    </div>
  )
}
