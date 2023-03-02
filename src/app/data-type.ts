export interface signUp{
  name:string,
  email: string,
  password: string,
  role: string
}

export interface Login{
  name:string,
  email: string,
  password: string,
}

export interface product{
  name: string,
  price: number,
  category: string,
  color: string,
  image: string,
  description: string,
  id: number
}
