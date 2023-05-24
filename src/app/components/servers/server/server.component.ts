import { Component, Input } from '@angular/core'

import { ServersService } from '~/services/servers.service'

import type { Server } from '~/types'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  @Input() server: Server

  constructor(private serversService: ServersService) {}

  getColor() {
    return this.serversService.getStatusColor(this.server.id)
  }

  toggleStatus() {
    this.serversService.toggleStatus(this.server.id)
  }
}
