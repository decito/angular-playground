import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Data, Router } from '@angular/router'
import { Observable } from 'rxjs/internal/Observable'

import { ServersService } from '~/services/servers.service'

import { CanDeactivateComponent } from '~/routes/guards/can-deactivate-guard.service'

import type { Server } from '~/types/server'

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html'
})
export class ServerEditComponent implements OnInit, CanDeactivateComponent {
  server: Server
  newServerName: string
  changesSaved = false

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((d: Data) => {
      this.server = d['server']

      this.newServerName = d['server'].name
    })
  }

  getColor() {
    return this.serversService.getStatusColor(this.server.id)
  }

  toggleStatus(id: number) {
    this.serversService.toggleStatus(id)
  }

  updateServerName() {
    this.serversService.updateName(this.server.id, this.newServerName)

    this.changesSaved = true

    this.router.navigate(['/servers'], { relativeTo: this.route })
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.newServerName !== this.server.name && !this.changesSaved
      ? confirm('Você quer descartar as mudanças?')
      : true
  }

  deleteServer(id: number) {
    this.serversService.deleteServer(id)
  }
}
