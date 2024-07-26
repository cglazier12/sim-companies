import axios from 'axios'
import { Item } from './types'


const API_URL = 'https://www.simcompanies.com/api/v3/market/0/139/'

export const fetchCandlestickData = async () => {
  try {

    const response: Item[] = await axios.get(API_URL)
    console.log(response)
    return response
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
