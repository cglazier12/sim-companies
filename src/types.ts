export interface Seller {
    id: number
    company: string
    realmId: number
    logo: string
    certificates: number
    contest_wins: number
    npc: boolean
    courseId: number | null
    ip: string
  }
  
export interface Item {
    id: number
    kind: number
    quantity: number
    quality: number
    price: number
    seller: Seller
    posted: string
    fees: number
  }

export interface IData {
  name: string
  data: number
  // define your fields
}