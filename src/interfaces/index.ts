export interface Product {
  id?: number,
  name: string,
  amount: string,
  orderId?: number | null,
}
export interface User {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface Order {
  id?: number,
  userId: number,
  products: number[],
}

export interface IOrder {
  id: number,
  userId: number,
  product: number,
}