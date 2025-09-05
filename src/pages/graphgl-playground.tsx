import React from 'react'

export default function GraphQLPlayground() {
  const endpoint = 'http://localhost:3000/api/graphql'

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src={`https://studio.apollographql.com/sandbox/explorer?endpoint=${encodeURIComponent(
          endpoint
        )}`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Apollo Sandbox"
      />
    </div>
  )
}


