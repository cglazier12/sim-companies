// db.ts
import mongoose from 'mongoose'
import DataModel from '../Models/Data'

mongoose.connect('mongodb://localhost:27017/mydatabase')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to the database')
})

async function saveData(data: any): Promise<void> {
  const newData = new DataModel(data)
  await newData.save()
}

export { saveData }
