export type ServerStatus = 'online' | 'stable' | 'offline' | 'critical'

export interface Server {
  id: number
  name: string
  status: ServerStatus
  ip?: string
  color?: 'green' | 'red'
}

export interface AppServer {
  instanceType: string
  name: string
  status: ServerStatus
  started: Date
}
