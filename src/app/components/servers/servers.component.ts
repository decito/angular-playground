import { Component, OnInit } from '@angular/core'

import { ServersService } from '~/services/servers.service'

import type { Server } from '~/types/server'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  newServerName = 'New Server'
  newServerCreated = false

  serverList: Server[]

  constructor(private serversService: ServersService) {
    setTimeout(() => (this.allowNewServer = true), 2000)
  }

  ngOnInit() {
    this.serverList = this.serversService.getServers() as Server[]
  }

  createServer() {
    const name = this.newServerName
    const status = 'offline'

    this.serversService.createServer(name, status)

    this.newServerCreated = true

    setTimeout(() => (this.newServerCreated = false), 2000)
  }

  updateServerName(event: Event) {
    this.newServerName = (<HTMLInputElement>event.target).value
  }
}
