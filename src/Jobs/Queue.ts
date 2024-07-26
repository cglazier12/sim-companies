// Queue.ts
import Queue from 'bull'
import Fetch from './Fetch'
import { fetchCandlestickData } from '../api'

const jobQueue = new Queue('data-fetch', {
  redis: { port: 6379, host: '127.0.0.1' }
})

jobQueue.process(async (job) => {
  if (job.data.endpoint) {
    await Fetch(job.data.endpoint)
  } else if (job.data.type === 'fetchCandlestickData') {
    const data = await fetchCandlestickData()
    console.log(data)
    // You can save the data to the database if needed
  }
})

export default jobQueue
