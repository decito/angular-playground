import { Component, Input } from '@angular/core'

import { ServersServices } from 'src/app/services/servers.service'

import type { Server } from 'src/app/types/server'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  @Input() server: Server

  constructor(private serversService: ServersServices) {}

  getColor() {
    return this.serversService.getStatusColor(this.server.id)
  }

  toggleStatus() {
    this.serversService.toggleStatus(this.server.id)
  }
}
