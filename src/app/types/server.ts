export interface Server {
  id: number
  name: string
  status: 'online' | 'offline'
  ip?: string
  color?: 'green' | 'red'
}

export interface AppServer {
  instanceType: string
  name: string
  status: string
  started: Date
}
