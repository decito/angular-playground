import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import type { Server } from '~/types'

@Injectable({ providedIn: 'root' })
export class ServersService {
  private serverList: Server[] = [
    { id: 1, name: 'Root Server', status: 'online' },
    { id: 2, name: 'Template Server', status: 'offline' }
  ]

  private lastIndex = this.serverList.length

  constructor(private router: Router) {}

  private findServer(n: number): Server {
    return this.serverList[this.serverList.findIndex(s => s.id === n)]
  }

  getServers(serverID?: number) {
    if (!serverID && serverID !== 0) return this.serverList

    return this.findServer(serverID)
  }

  getStatusColor(serverID: number) {
    return this.findServer(serverID).status === 'online' ? 'green' : 'red'
  }

  createServer(n: string, o: string) {
    this.lastIndex += 1

    const newServer: Server = {
      id: this.lastIndex,
      name: n,
      status: o === 'online' ? 'online' : 'offline'
    }

    this.serverList.push(newServer)
  }

  toggleStatus(serverID: number) {
    this.findServer(serverID).status === 'online'
      ? (this.findServer(serverID).status = 'offline')
      : (this.findServer(serverID).status = 'online')
  }

  updateName(serverID: number, name: string) {
    this.findServer(serverID).name = name
  }

  deleteServer(serverID: number) {
    this.serverList.splice(
      this.serverList.findIndex(s => s.id === serverID),
      1
    )

    this.router.navigate(['/servers'])
  }
}
