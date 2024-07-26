// models/Data.ts
import { prop, getModelForClass } from '@typegoose/typegoose'
import { IData } from '../types'

class Data implements IData {
  @prop({ required: true })
  public name!: string

  @prop({ required: true })
  public data!: number

  // define your fields with appropriate decorators
}

const DataModel = getModelForClass(Data)
export default DataModel
