export interface Server {
  id: number
  name: string
  ip?: string
  status?: "online" | "offline"
  color?: "green" | "red"
}