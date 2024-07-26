// Schedule.ts
import jobQueue from "./Queue"

const endpoints: string[] = [
  'https://www.simcompanies.com/api/v3/market/0/5/', 
  'https://www.simcompanies.com/api/v2/market-ticker/0/2023-07-25T02:55:03.333Z/',
  // add your endpoints here
]

endpoints.forEach((endpoint) => {
  jobQueue.add({ endpoint }, { repeat: { every: 60000 } }) // every 60 seconds
})
