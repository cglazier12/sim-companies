// src/components/FetchButton.tsx
import React, { useState } from 'react'
import axios from 'axios'

const TestQueueButton: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:4000/fetch-candlestick-data')
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching candlestick data', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? 'Loading...' : 'Fetch Candlestick Data'}
    </button>
  )
}

export default TestQueueButton