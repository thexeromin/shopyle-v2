export interface Category {
  _id: string
  name: string
}

export interface Product {
  _id: string
  name: string
  description: string
  price: number
  category: Category | string
  stock: number
  sold: number
  photo: string
}
