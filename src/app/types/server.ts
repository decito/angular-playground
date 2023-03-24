export interface Server {
  id: number
  name: string
  status: "online" | "offline"
  ip?: string
  color?: "green" | "red"
}