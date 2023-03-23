import { Injectable } from "@angular/core"
import { Router } from "@angular/router"

import { Server } from "src/app/types/server"

@Injectable({ providedIn: 'root' })
export class ServersServices {
  private serverList: Server[] = [
    { id: 1, name: "Root Server", status: "online" },
    { id: 2, name: "Template Server", status: "offline" },
  ]

  constructor(private router: Router) { }

  getServers(n?: number) {
    if (!n && n !== 0)
      return this.serverList

    return this.serverList[this.serverList.findIndex(s => s.id === n)]
  }

  getStatusColor(serverID: number) {
    return this.serverList[this.serverList.findIndex(s => s.id === serverID)].status === "online" ? "green" : "red"
  }

  createServer(n: string, o: string) {
    const newServer: Server = {
      id: this.serverList.length + 1,
      name: n,
      status: o === 'online' ? 'online' : 'offline'
    }

    this.serverList.push(newServer)
  }

  toggleStatus(serverID: number) {
    this.serverList[this.serverList.findIndex(s => s.id === serverID)].status === 'online'
      ? this.serverList[this.serverList.findIndex(s => s.id === serverID)].status = 'offline'
      : this.serverList[this.serverList.findIndex(s => s.id === serverID)].status = 'online'
  }

  updateName(serverID: number, name: string) {
    this.serverList[this.serverList.findIndex(s => s.id === serverID)].name = name
  }

  deleteServer(serverID: number) {
    this.serverList.splice(this.serverList.findIndex(s => s.id === serverID), 1)

    this.router.navigate(['/servers'])
  }
}