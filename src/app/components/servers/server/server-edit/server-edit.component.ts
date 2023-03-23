import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

import { ServersServices } from 'src/app/services/servers.service'

import { Server } from 'src/app/types/server'

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html'
})
export class ServerEditComponent implements OnInit {
  server: Server
  newServerName: string

  constructor(
    private serversService: ServersServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const serverID = parseInt(this.route.snapshot.params['id'])

    this.server = this.serversService.getServers(serverID) as Server

    this.newServerName = this.server.name
  }

  getColor() {
    return this.serversService.getStatusColor(this.server.id)
  }

  toggleStatus(id: number) {
    this.serversService.toggleStatus(id)
  }

  updateServerName() {
    this.serversService.updateName(this.server.id, this.newServerName)
  }

  deleteServer(id: number) {
    this.serversService.deleteServer(id)
  }
}
