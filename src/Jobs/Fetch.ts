// Fetch.ts
import axios from 'axios'
import { saveData } from '../Database/db'

async function Fetch(endpoint: string): Promise<void> {
  try {
    const response = await axios.get(endpoint)
    await saveData(response.data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export default Fetch
